import { useContext } from 'react';
import { ColorValue } from 'react-native';
import { useTheme as useRestyleTheme } from '@shopify/restyle';

import { ThemeType, TThemeColor } from './types';
import { ThemeContext } from './ThemeContext';

/**
 * Returns the current theme object, colors, spacing, borders,.
 */
export const useTheme = () => useRestyleTheme<ThemeType>();

/**
 * Returns the current active theme colors.
 */
export const useThemeColors = () => useRestyleTheme<ThemeType>().colors;

/**
 * Returns the color value of the given key.
 */
export const useThemeColorKey = (colorKey: TThemeColor): ColorValue =>
  useRestyleTheme<ThemeType>().colors[colorKey];

/**
 * Returns the current active theme spacing constraints.
 */
export const useThemeSpacing = () => useRestyleTheme<ThemeType>().spacing;

/**
 * Returns the current active theme color mode
 */
export const useIsThemeLight = () => useContext(ThemeContext).isThemeLight;

/**
 * Returns the the entire theme
 */
export const useThemeContext = () => useContext(ThemeContext);

export default useTheme;
