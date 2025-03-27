import { createContext } from 'react';

import { LocaleOptionsType } from './i18n';

export type TLanguageFlagId = 'arabic' | 'english';

export interface ILanguageContextOptions {
  /**
   * The active locale, either `en` or `ar`.
   */
  currentLanguage: LocaleOptionsType;
  /**
   * The flag icon id to be used for the indexing the current language.
   */
  flagIconId: TLanguageFlagId;
  /**
   * This determines the left to right layout of the app based on the current
   * language, that is `ar` is right to left and `en` is left to right.
   */
  isRTL: boolean;
  /**
   * Callback function to update the locale and switch the current language.
   */
  onUpdateLanguage: (() => void) | null;
}

/**
 * Provides the app active language to all underlying child components which
 * can access it.
 */
export const LanguageContext = createContext<ILanguageContextOptions>({
  currentLanguage: 'en',
  flagIconId: 'english',
  isRTL: false,
  onUpdateLanguage: null,
});
