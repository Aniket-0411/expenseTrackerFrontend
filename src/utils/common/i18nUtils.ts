import { TLocale, TTextLocalized } from '../types';

type IGetTextFromI18nOptions = {
  /**
   * A simple string or object with locale domains to be rendered.
   */
  text: TTextLocalized;
  /**
   * The locale of the active language in the UI (or Path param)
   */
  locale: TLocale;
};

/**
 * Gets the translated language from an internationalized text into a readable string.
 * Useful for rendering in places where `Text` cannot be used.
 *
 * @param IGetTextFromI18nOptions
 */
export function getTextFromI18n({ locale, text }: IGetTextFromI18nOptions) {
  let localizedText = '';

  if (typeof text === 'string') {
    localizedText = text;
  } else {
    /**
     * This extracts the key of the text from the oject based on the currently
     * supported active locale's language type..
     */
    localizedText = text[locale];
  }

  return localizedText;
}

type IMergeLocalizedTextOptions = {
  /**
   * An array of simple strings or locale objects with locale domains to be rendered.
   */
  texts: TTextLocalized[];
  /**
   * The locale of the active language in the UI (or Path param)
   */
  locale: TLocale;
  /**
   * This defines the string that would be used in merging the localized text.
   * Default is an empty space.
   */
  separator?: string;
};

/**
 * This gets an array of text to be merged into a single translated string.
 * Expects the...
 * - `locale` for the active language,
 * - `texts` array containing translatable text, and
 * - `separator` to be used in merging the items. defaults to an empty space.
 *
 * @param IMergeLocalizedTextOptions
 */
export function mergeLocalizedText({ locale, texts, separator = ' ' }: IMergeLocalizedTextOptions) {
  // const firstText = texts[0];

  let localizedText = '';

  const localizedArray = texts?.map((text) => {
    if (typeof text === 'string') {
      return `${separator}${text}`;
    }

    const tText = text[locale];

    return `${separator}${tText}`;
  });

  localizedText = localizedArray.join(separator || ' ');

  return localizedText;
}
