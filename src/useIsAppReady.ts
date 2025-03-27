import * as SplashScreen from "expo-splash-screen";

import { useInitialRootStore } from "~/models";

import { useCustomFonts } from "./theme";
import { useSegments } from "expo-router";
import { useEffect, useState } from "react";

/**
 * This hooks handles the logic for determining if the app is ready to be shown,
 * while loading background tasks like fonts, previous state models cached and
 * native components.
 * NOTE: This also checks for the auth token to be loaded and if it has an
 * error provides the `hasTokenError` to be used on error rendering.
 */
export function useIsAppReady() {
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const { areFontsLoaded, fontLoadError } = useCustomFonts();
  const segments = useSegments();
  useEffect(() => {
    if (segments.includes("login")) {
      setIsLoginScreen(true);
    } else {
      setIsLoginScreen(false);
    }
  }, [segments]);

  const hideSplashScreen = async () => {
    if (SplashScreen.preventAutoHideAsync) {
      await SplashScreen.preventAutoHideAsync();
    }

    await SplashScreen.hideAsync();
  };

  const { rehydrated } = useInitialRootStore(() => {
    // This runs after the root store has been initialized and rehydrated.

    // If your initialization scripts run very fast, it's good to show the splash
    // screen for just a bit longer to prevent flicker.
    // Slightly delaying splash screen hiding for better UX; can be customized
    // or removed as needed,
    // Note: (vanilla Android) The splash-screen will not appear if you launch
    // your app via the terminal or Android Studio. Kill the app and launch it
    // normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
    // Note: (vanilla iOS) You might notice the splash-screen logo change size.
    // This happens in debug/development mode. Try building the app for release.
    setTimeout(hideSplashScreen, 500);
  });

  /**
   * Before we show the app, we have to wait for our state to be ready.
   * In the meantime, don't render anything. This will be the background
   * color set in native by rootView's background color.
   * - In iOS: `application:didFinishLaunchingWithOptions:`
   * - In Android: `https://stackoverflow.com/a/45838109/204044`
   */
  const appIsNotReady = !rehydrated || (!areFontsLoaded && !fontLoadError);

  return {
    appIsNotReady,
    isLoginScreen,
  };
}
