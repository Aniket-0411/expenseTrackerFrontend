import { Platform } from 'react-native';

export const fonts = {
  /**
   * The primary font used in most places for LTR languages.
   */
  fontPrimary: {
    light: 'Matter-Light',
    normal: 'Matter-Regular',
    normalItalic: 'Matter-RegularItalic',
    medium: 'Matter-Medium',
    semiBold: 'Matter-SemiBold',
    bold: 'Matter-Bold',
  },
  /**
   * The secondary font used in most places for LTR languages.
   */
  fontSecondary: {
    normal: 'OrpheusPro-Regular',
    normalItalic: 'OrpheusPro-Italic',
    medium: 'OrpheusPro-Medium',
    bold: 'OrpheusPro-Bold',
  },
  /**
   * The primary font used in most places for Arabic.
   * NOTE: This has only one type
   */
  fontPrimaryArabic: {
    thin: 'HarirDisplay',
    light: 'HarirDisplay',
    normal: 'HarirDisplay',
    medium: 'HarirDisplay',
    semiBold: 'HarirDisplay',
    bold: 'HarirDisplay',
  },
  helveticaNeue: {
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  },
  courier: {
    // iOS only font.
    normal: 'Matter-Light',
  },
  sansSerif: {
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  },
  monospace: {
    // Android only font.
    normal: 'monospace',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.fontPrimary,
  primaryArabic: fonts.fontPrimaryArabic,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.helveticaNeue,
    android: fonts.sansSerif,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.monospace, android: fonts.monospace }),
};
