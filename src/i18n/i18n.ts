import * as Localization from 'expo-localization';
import { I18n, TranslateOptions } from 'i18n-js';
import { I18nManager } from 'react-native';

// if English isn't your default language, move Translations to the appropriate
// language file.
import ar from './ar';
import en, { TTranslations } from './en';

// Migration guide from i18n 3.x -> 4.x:
// https://github.com/fnando/i18n-js/blob/main/MIGRATING_FROM_V3_TO_V4.md
// https://github.com/fnando/i18n/discussions/24

// to use regional locales use { "en-US": enUS } etc
const fallbackLocale = 'en';
export const i18n = new I18n(
  { ar, en },
  { locale: fallbackLocale, defaultLocale: fallbackLocale, enableFallback: true }
);

const systemLocale = Localization.getLocales()[0];
const systemLocaleTag = systemLocale?.languageTag ?? fallbackLocale;

if (Object.hasOwn(i18n.translations, systemLocaleTag)) {
  // if specific locales like en-FI or en-US is available, set it
  i18n.locale = systemLocaleTag;
} else {
  // otherwise try to fallback to the general locale (dropping the -XX suffix)
  const generalLocale = systemLocaleTag.split('-')[0];
  if (Object.hasOwn(i18n.translations, generalLocale)) {
    i18n.locale = generalLocale;
  } else {
    i18n.locale = fallbackLocale;
  }
}

// handle RTL languages
export const isRTL = systemLocale?.textDirection === 'rtl';
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export type { TranslateOptions } from 'i18n-js';

export type LocaleOptionsType = 'en' | 'ar';

export const getCurrentLocale = () => i18n.locale?.substring(0, 2) as LocaleOptionsType;

/**
 * This helps check whether the current locale is a RTL locale, such as `arabic` or
 * `hebrew`.
 */
export const getIsRTL = () =>
  getCurrentLocale().startsWith('ar') || getCurrentLocale().startsWith('he');

/**
 * Text which provides different text for each locale.
 * English is the default locale if no translation is found.
 *
 * For example...
 * ```ts
 * { en: 'Hello', ar: 'مرحبا' }
 * ```
 */
export type TLocalizedText = {
  en: string;
  ar: string;
};

/**
 * This creates a translation aware type for text fields.
 * Allows items to expect a simple string or a localized object.
 */
export type TTextLocalized = string | TLocalizedText;

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<TTranslations>;

/**
 * The type for the custom values passed down to the TxKeyPath
 */
export type TTxOptions = TranslateOptions;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends unknown[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
