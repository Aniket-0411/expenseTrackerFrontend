import { getTextFromI18n } from '../common';
import { TError, IValidateOptions } from '../types';

import { cleanupDoubleSpace } from './helpers';
import { validateInputTypeAndFormat } from './validateInputTypeAndFormat';
import { validateInputLength } from './validateInputLength';

/**
 * -------------------------------------------------------------------------
 * Validates target input item based on the constraints.
 *
 * @param options Target and constraints to be validated against.
 * @returns error Can be as string or undefined.
 */
export const validate = ({ target, constraints, locale }: IValidateOptions): TError => {
  const { value } = target;

  /**
   * Trim trailing spaces on input except for passwords.
   */
  const tempValue =
    constraints.type === 'password'
      ? value.toString()
      : value.toString().toLocaleLowerCase().trim();

  if (tempValue) {
    cleanupDoubleSpace(tempValue);
  }

  // Validate Length of Input and Escape Early.
  let error = validateInputLength(tempValue, constraints, locale);

  let localeError = '';

  if (error) {
    localeError = getTextFromI18n({ text: error, locale });
  }

  if (localeError) {
    target.setCustomValidity(localeError);
    return error;
  }

  target.setCustomValidity('');

  // If length passes, validate type and format.
  error = validateInputTypeAndFormat(tempValue, constraints, locale);

  if (error) {
    target.setCustomValidity(localeError);
    return error;
  }

  target.setCustomValidity('');
  return undefined;
};
