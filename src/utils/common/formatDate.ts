/* eslint-disable @typescript-eslint/comma-dangle */

// Note the syntax of these imports from the date-fns library.
// If you import with the syntax: import { format } from "date-fns" the ENTIRE library
// will be included in your production bundle (even if you only use one function).
// This is because react-native does not support tree-shaking.
import { type Locale, type FormatDateOptions } from 'date-fns';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import ar from 'date-fns/locale/ar-SA';
import ko from 'date-fns/locale/ko';
import en from 'date-fns/locale/en-US';

import { i18n } from '~/i18n';

const getLocale = (): Locale => {
  const locale = i18n.locale.split('-')[0];

  if (locale === 'ar') return ar as unknown as Locale;
  if (locale === 'ko') return ko as unknown as Locale;

  return en as unknown as Locale;
};

export const formatDate = (date: string, dateFormat?: string, options?: FormatDateOptions) => {
  if (!date) return '';

  const locale = getLocale();
  const dateOptions = {
    ...options,
    locale,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore // Silencing this type error because the above import format
  return format(parseISO(date), dateFormat ?? 'MMM dd, yyyy', dateOptions);
};

/**
 * Coverts a date from a current format to another format.
 * @param date
 * @param currentFormat - The current format default to `dd/MM/yyyy`.
 * @param newFormat - The new format default to `dd MMMM yyyy`.
 * @param options - Additional options to transform the date.
 * @returns - The new formatted date.
 */
export const formatDateToOtherFormat = (
  date: string,
  currentFormat = 'dd/MM/yyyy',
  newFormat = 'dd MMMM yyyy',
  options?: FormatDateOptions
) => {
  if (!date) return '';

  const locale = getLocale();
  const dateOptions = {
    ...options,
    locale,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore // Silencing this type error because the above import format
  // return format(parse(date), dateFormat ?? 'MMM dd, yyyy', dateOptions);
  return format(parse(date, currentFormat, new Date()), newFormat, dateOptions);
};

/**
 * Coverts a date from the `dd/MM/yyyy` format to the `dd-MMM-yyyy` format.
 * @param date - The date to be transformed.
 * @param options - Additional options to transform the date.
 * @returns - The new formatted date.
 */
export const formatDateSlashToStrokeFormat = (date: string, options?: FormatDateOptions) =>
  formatDateToOtherFormat(date, 'dd/MM/yyyy', 'dd-MMM-yyyy', options);

/**
 * Converts a date string from 'YYYY-MM-DD' format to 'dd/MM/yyyy' format.
 *
 * @param date The date string in 'YYYY-MM-DD' format (e.g., '2024-10-22').
 * @returns The date string in 'dd/MM/yyyy' format (e.g., '22/10/2024').
 */
export const convertBackToSlashFormat = (date: string): string =>
  // Convert the input date from 'YYYY-MM-DD' to 'dd/MM/yyyy'
  formatDateToOtherFormat(date, 'yyyy-MM-dd', 'dd/MM/yyyy');
