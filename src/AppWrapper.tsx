import "./devtools/initReactotronDebugging";

import { ReactNode } from "react";
import { ActivityIndicator } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Config from "~/config";
import { LanguageProvider } from "~/i18n";
import { ErrorBoundary } from "~/screens";
import { Box, DevThemeToggle, ThemeProvider } from "~/theme";
import { ignoreLogBoxWarnings } from "~/utils";

import { useIsAppReady } from "./useIsAppReady";

ignoreLogBoxWarnings();

interface IAppWrapperProps {
  children: ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * This acts as the wrapper for our application. All necessary providers, error
 * boundaries, and anything else that wraps the entire app should be placed here.
 */
export function AppWrapper({ children }: IAppWrapperProps) {
  const { appIsNotReady } = useIsAppReady();

  if (appIsNotReady) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LanguageProvider>
          <ThemeProvider>
            <ErrorBoundary catchErrors={Config.catchErrors} type="app-wide">
              {children}
              <DevThemeToggle />
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
