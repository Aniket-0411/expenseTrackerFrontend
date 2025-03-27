import { createContext, useMemo, useRef, useState } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { ThemeProvider as RestyleProvider } from '@shopify/restyle';

import { loadLocalBoolean, loadLocalString, removeLocalData, saveLocalPrimitive } from '~/utils';

import { SETTING_CURRENT_THEME, SETTING_SHOW_LABELS } from './constants';
import { theme, darkTheme } from './theme';
import { IThemeContextOptions, TActiveTheme, ThemeProviderPropsTypes } from './types';

/**
 * Provides App theme to all underlying child components which can access it
 * deep within the tree for direct updates ad customizations.
 */
export const ThemeContext = createContext<IThemeContextOptions>({
  isBottomTabLabelsEnabled: false,
  isThemeLight: Appearance.getColorScheme() !== 'dark',
  onThemeChange: null,
  onToggleBottomTabLabels: null,
  theme,
  themeKey: undefined,
});

/**
 * -----------------------------------------------------------------------------
 * Base Theme Provider of the App that exposes configurable settings for the app
 *
 * - Theme Mode support for dark & Light Mode
 * - Action Icon Labels toggling
 */
export function ThemeProvider({ children }: ThemeProviderPropsTypes) {
  const colorScheme = Appearance.getColorScheme();

  const initShowLabelsRef = useRef(loadLocalBoolean(SETTING_SHOW_LABELS) || true).current;

  const persistedTheme = loadLocalString(SETTING_CURRENT_THEME) as TActiveTheme;

  /**
   * Get the previously saved theme from the local storage or load the default,
   * if none is available set it to the device `default`.
   */
  // const initTheme = persistedTheme ?? colorScheme;

  const [isThemeLight, setIsThemeLight] = useState(true);
  const [themeKey, setThemeKey] = useState(persistedTheme);

  /**
   * Used to display labels on action buttons/icons like bottom tabs
   */
  const [isBottomTabLabelsEnabled, setIsBottomTabLabelsEnabled] =
    useState<boolean>(initShowLabelsRef);

  // TODO: This we can use to set the theme based on the user's preference
  // once we have the dark mode theme ready.
  // useEffect(() => {
  //   /**
  //    * On changing the device color scheme or the persisted them value,
  //    * If the user has specifically set the theme to `dark` or `light` and
  //    * persisted/saved the theme,  ignore the device color scheme change.
  //    * Otherwise switch with the device color scheme.
  //    */
  //   if (persistedTheme) {
  //     setIsThemeLight(true);
  //   } else if (colorScheme) {
  //     setIsThemeLight(true);
  //   }
  // }, [colorScheme, persistedTheme]);

  const handleOnThemeChange = (newTheme: TActiveTheme) => {
    if (!newTheme) {
      setIsThemeLight(() => colorScheme === 'light');
      setThemeKey(() => undefined);
      removeLocalData(SETTING_CURRENT_THEME);
    } else {
      setIsThemeLight(() => newTheme === 'light');
      setThemeKey(newTheme);
      saveLocalPrimitive(SETTING_CURRENT_THEME, newTheme);
    }
  };

  const handleOnToggleBottomTabLabels = () => {
    setIsBottomTabLabelsEnabled(() => !isBottomTabLabelsEnabled);
    saveLocalPrimitive(SETTING_SHOW_LABELS, !isBottomTabLabelsEnabled);
  };

  if (isThemeLight) {
    StatusBar.setBarStyle('dark-content', true);
  } else {
    StatusBar.setBarStyle('light-content', true);
  }

  const memoizedValue: IThemeContextOptions = useMemo(
    () => ({
      isBottomTabLabelsEnabled,
      isThemeLight,
      onThemeChange: handleOnThemeChange,
      onToggleBottomTabLabels: handleOnToggleBottomTabLabels,
      theme: isThemeLight ? theme : darkTheme,
      themeKey,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isThemeLight, isBottomTabLabelsEnabled]
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <RestyleProvider theme={isThemeLight ? theme : darkTheme}>{children}</RestyleProvider>
    </ThemeContext.Provider>
  );
}
