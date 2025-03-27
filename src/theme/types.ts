import { ReactElement } from 'react';
import type { TextProps } from '@shopify/restyle';
import { I18nManager } from 'react-native';

import { BoxProps } from './box';
import { ThemeType as AppThemeType, ThemeColorType } from './theme';

export type { TextProps } from '@shopify/restyle';

const { isRTL } = I18nManager;

export const fontFamily = {
  primary: isRTL ? 'HarirDisplay' : 'Matter-Regular',
  fontPrimaryLight: isRTL ? 'HarirDisplay' : 'Matter-Light',
  fontPrimaryRegular: isRTL ? 'HarirDisplay' : 'Matter-Regular',
  fontPrimaryRegularEn: 'Matter-Regular',
  fontPrimaryBold: isRTL ? 'HarirDisplay' : 'Matter-Bold',
  fontPrimarySemiBold: isRTL ? 'HarirDisplay' : 'Matter-SemiBold',
  fontPrimarySemiBoldEn: 'Matter-SemiBold',
  fontPrimaryMedium: isRTL ? 'HarirDisplay' : 'Matter-Medium',
  fontPrimaryMediumEn: 'Matter-Medium',
  fontPrimaryThin: isRTL ? 'HarirDisplay' : 'Matter-Thin',
  secondary: isRTL ? 'HarirDisplay' : 'OrpheusPro-Regular',
  fontSecondaryRegular: isRTL ? 'HarirDisplay' : 'OrpheusPro-Regular',
  fontSecondaryRegularEn: 'OrpheusPro-Regular',
  fontSecondaryItalic: isRTL ? 'HarirDisplay' : 'OrpheusPro-Italic',
  fontSecondaryMedium: isRTL ? 'HarirDisplay' : 'OrpheusPro-Medium',
  fontSecondaryBold: isRTL ? 'HarirDisplay' : 'OrpheusPro-Bold',
};

export type TFontFamily = keyof typeof fontFamily;

export type ThemeType = AppThemeType;
export type TThemeColor = ThemeColorType;
export type BoxPropsType = BoxProps<ThemeType>;
export type TextPropsType = Omit<TextProps<ThemeType>, 'fontFamily'> & {
  fontFamily?: TFontFamily;
};
export type ButtonThemedPropsType = TextProps<ThemeType>;

/**
 * The type definition of the theme, either light, dark or default
 * (not set by the user).
 */
export type TActiveTheme = 'light' | 'dark' | undefined;

export interface ThemeProviderPropsTypes {
  children: ReactElement;
}

export interface IThemeContextOptions {
  /**
   * Used to determine if the bottom tab labels should be enabled or not.
   */
  isBottomTabLabelsEnabled: boolean;
  /**
   * A boolean value to determine if the current theme is light or not.
   * This is useful for components that need to change their styles based this,
   * but if you need the exact value, use `themeKey` instead.
   */
  isThemeLight: boolean;
  /**
   * Callback function to change the theme (`dark` | `light`), and this will
   * also persist the theme to local mmkv storage.
   * Note: Can also set the theme to default by passing `undefined`.
   */
  onThemeChange: ((newTheme: TActiveTheme) => void) | null;
  /**
   * Callback function to toggle the bottom tab labels.
   */
  onToggleBottomTabLabels: (() => void) | null;
  /**
   * The current active restyle full object theme, with colors, styles, etc.
   */
  theme: AppThemeType;
  /**
   * Returns a string value of the current theme, either `light` or `dark` or
   * `undefined` if not set by the user.
   */
  themeKey: TActiveTheme;
}
