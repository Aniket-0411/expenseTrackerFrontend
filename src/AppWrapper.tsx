import "./devtools/initReactotronDebugging";

import { ReactNode, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { useSegments } from "expo-router";

import Config from "~/config";
import { LanguageProvider } from "~/i18n";
import { ErrorBoundary } from "~/screens";
import { Box, DevThemeToggle, ThemeProvider } from "~/theme";
import { ignoreLogBoxWarnings } from "~/utils";

import { useIsAppReady } from "./useIsAppReady";
import BottomNav from "Model/BottomNav";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuthStore } from "./services";

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
  const { appIsNotReady, isLoginScreen } = useIsAppReady();
  const [showBottomNav, setShowBottomNav] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.id) {
      setShowBottomNav(true);
    } else {
      setShowBottomNav(false);
    }
  }, [user])

  if (appIsNotReady) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView>
        <LanguageProvider>
          <ThemeProvider>
            <ErrorBoundary catchErrors={Config.catchErrors} type="app-wide">
              {children}
              <DevThemeToggle />

              <Box position="absolute" bottom={0} left={20} right={30} mx="l">
                {showBottomNav && <BottomNav />}
              </Box>
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
