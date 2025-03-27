import { i18n } from './i18n';

/**
 * This takes in a number and formats it to based on the current locale.
 *
 * @param value - The initial number to format.
 * @returns string - The formatted value.
 */
export function formatNumber(value?: number) {
  if (!value) return '';

  return i18n.numberToRounded(value, {
    precision: 0,
    delimiter: ',',
    stripInsignificantZeros: true,
  });
}
