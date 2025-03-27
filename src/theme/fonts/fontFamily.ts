import { I18nManager } from 'react-native';

export enum FontType {
  // Matter - Primary
  fontPrimaryBold = 'Matter-Bold',
  fontPrimaryLight = 'Matter-Light',
  fontPrimaryRegular = 'Matter-Regular',
  fontPrimaryMedium = 'Matter-Medium',
  fontPrimarySemiBold = 'Matter-SemiBold',
  fontPrimaryThin = 'Matter-Thin',
  fontPrimaryBlack = 'Matter-Black',

  // OrpheusPro - Primary
  fontSecondaryBold = 'OrpheusPro-Bold',
  fontSecondaryRegular = 'OrpheusPro-Regular',
  fontSecondaryItalic = 'OrpheusPro-Italic',
  fontSecondaryMedium = 'OrpheusPro-Medium',

  // HarirDisplay - Primary Arabic
  fontPrimaryArabicThin = 'HarirDisplay',
  fontPrimaryArabicLight = 'HarirDisplay',
  fontPrimaryArabicRegular = 'HarirDisplay',
  fontPrimaryArabicMedium = 'HarirDisplay',
  fontPrimaryArabicSemiBold = 'HarirDisplay',
  fontPrimaryArabicBold = 'HarirDisplay',
  fontPrimaryArabicBlack = 'HarirDisplay',
}

type FontFamilyType = {
  /**
   * The primary font.  Used in most places, such as the body text.
   */
  primary: FontType.fontPrimaryRegular | FontType.fontPrimaryArabicRegular;
  /**
   * The primary english only font.
   */
  primaryEn: FontType.fontPrimaryRegular;
  /**
   * A very thick/bolder version of the primary font
   */
  primaryBlack: FontType.fontPrimaryBlack | FontType.fontPrimaryArabicBlack;

  /**
   * A bold version of the primary font
   */
  primaryBold: FontType.fontPrimaryBold | FontType.fontPrimaryArabicBold;
  /**
   * The medium font version of the app
   */
  primarySemiBold: FontType.fontPrimarySemiBold | FontType.fontPrimaryArabicSemiBold;
  /**
   * The medium font version of the app
   */
  primaryMedium: FontType.fontPrimaryMedium | FontType.fontPrimaryArabicMedium;
  /**
   * A light/thin version of the primary font.
   * Used in places like fancy titles, or small descriptive/info text.
   */
  primaryLight: FontType.fontPrimaryLight | FontType.fontPrimaryArabicLight;
  /**
   * The secondary font.  Used in most places, such as title texts and quotes
   */
  secondary: FontType.fontSecondaryRegular | FontType.fontPrimaryArabicRegular;
  /**
   * A very thick/bolder version of the secondary font
   */
  secondaryBold: FontType.fontSecondaryBold | FontType.fontPrimaryArabicBold;
  /**
   * A very italic version of the secondary font, for descriptions and hints
   */
  secondaryItalic: FontType.fontSecondaryItalic | FontType.fontPrimaryArabicRegular;
  /**
   * A very medium version of the secondary font, for a slightly bold version
   */
  secondaryMedium: FontType.fontSecondaryMedium | FontType.fontPrimaryArabicMedium;
};

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 *
 * ---
 *
 * TODO: Add platform specific overrides here.
 * - `primary: Platform.select({ ios: 'Avenir Next', android: 'Robot' }),`
 * - `info: Platform.select({ ios: 'Courier', android: 'monospace' }),`
 */
export const fontFamily: FontFamilyType = {
  primary: I18nManager.isRTL ? FontType.fontPrimaryArabicRegular : FontType.fontPrimaryRegular,
  primaryEn: FontType.fontPrimaryRegular,
  primaryBlack: I18nManager.isRTL ? FontType.fontPrimaryArabicBlack : FontType.fontPrimaryBlack,
  primaryBold: I18nManager.isRTL ? FontType.fontPrimaryArabicBold : FontType.fontPrimaryBold,
  primarySemiBold: I18nManager.isRTL
    ? FontType.fontPrimaryArabicSemiBold
    : FontType.fontPrimarySemiBold,
  primaryMedium: I18nManager.isRTL ? FontType.fontPrimaryArabicMedium : FontType.fontPrimaryMedium,
  primaryLight: I18nManager.isRTL ? FontType.fontPrimaryArabicLight : FontType.fontPrimaryLight,
  secondary: I18nManager.isRTL ? FontType.fontPrimaryArabicRegular : FontType.fontSecondaryRegular,
  secondaryBold: I18nManager.isRTL ? FontType.fontPrimaryArabicBold : FontType.fontSecondaryBold,
  secondaryItalic: I18nManager.isRTL
    ? FontType.fontPrimaryArabicRegular
    : FontType.fontSecondaryItalic,
  secondaryMedium: I18nManager.isRTL
    ? FontType.fontPrimaryArabicMedium
    : FontType.fontSecondaryMedium,
};
