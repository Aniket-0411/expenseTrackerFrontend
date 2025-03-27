import { mergeLocalizedText } from '../common';
import { IConstraints, TError, TLocale, TTextLocalized } from '../types';

import { translations } from './translations';

/**
 * Simple helper to abstract away overly repeated logic in getting the error from
 * the input length based on the min or max length constraints.
 */
const getErrorMsg = (
  minLength: number,
  maxLength: number,
  length: number,
  message: TTextLocalized
): TError => {
  if (length < minLength || length > maxLength) return message;
  return undefined;
};

interface ILengthValidationOptions {
  minLength?: number;
  maxLength?: number;
  length: number;
  feedbackLabel: TTextLocalized;
  locale: TLocale;
}

/**
 * This validates the length of an email based on the provided constraints.
 */
const validateEmailLength = ({
  minLength = 7,
  maxLength = 150,
  length,
  feedbackLabel,
  locale,
}: ILengthValidationOptions) => {
  const isShort = length < minLength;

  const msg = mergeLocalizedText({
    texts: [
      feedbackLabel,
      isShort ? translations.tooShort(minLength) : translations.tooLong(maxLength),
    ],
    locale,
    separator: '',
  });

  return getErrorMsg(minLength || 7, maxLength || 150, length, msg);
};

/**
 * This validates the length of an telephone based on the provided constraints.
 */
const validateTelephoneLength = ({
  minLength = 8,
  maxLength = 14,
  length,
  feedbackLabel,
  locale,
}: ILengthValidationOptions) => {
  const isShort = length < minLength;

  const msg = mergeLocalizedText({
    texts: [
      feedbackLabel,
      isShort ? translations.tooShort(minLength) : translations.tooLong(maxLength),
    ],
    locale,
    separator: '',
  });

  return getErrorMsg(minLength, maxLength, length, msg);
};

/**
 * This validates the length of an Tax Identification Number
 */
const validateTINNumberLength = ({
  minLength,
  maxLength,
  length,
  feedbackLabel,
  locale,
}: ILengthValidationOptions) => {
  const tempMinLength = minLength || 9;
  const tempMaxLength = maxLength || 11;
  const isShort = length < tempMinLength;

  const msg = mergeLocalizedText({
    texts: [
      feedbackLabel,
      isShort ? translations.tooShort(tempMinLength) : translations.tooLong(tempMaxLength),
    ],
    locale,
    separator: '',
  });

  return getErrorMsg(tempMinLength, tempMaxLength, length, msg);
};

/**
 * This validates the length of an password based on the provided constraints.
 */
const validatePasswordLength = ({
  minLength,
  maxLength,
  length,
  feedbackLabel,
  locale,
}: ILengthValidationOptions) => {
  const msg = mergeLocalizedText({
    texts: [feedbackLabel, translations.charCount(minLength || 4, maxLength || 20)],
    locale,
    separator: '',
  });

  return getErrorMsg(minLength || 4, maxLength || 20, length, msg);
};

/**
 * This validates the length of an password based on the provided constraints.
 */
const validateDateLength = ({
  minLength,
  maxLength,
  length,
  feedbackLabel,
}: ILengthValidationOptions) => getErrorMsg(minLength || 8, maxLength || 14, length, feedbackLabel);

/**
 * -------------------------------------------------------------------------
 * Validates the Length of the input element based on constraints and returns
 * an error message or undefined for valid inputs.
 * Checks if input is required, minimum or maximum length is exceeded.
 *
 * @param value The value of the input.
 * @param constraints Options to determine length validation.
 * @param locale The translation language to use.
 * @returns error Can be as string or undefined.
 */
export const validateInputLength = (
  value: string,
  constraints: IConstraints,
  locale: TLocale
): TError => {
  const {
    type,
    minLength,
    maxLength,
    required,
    format,
    feedbackLabel = translations.this,
  } = constraints;

  const { length } = value;
  let error: TError;

  if (length <= 0) {
    if (required) {
      const msg = mergeLocalizedText({
        texts: [feedbackLabel, translations.isRequired],
        locale,
        separator: '',
      });

      error = msg;
      return error;
    }
    error = undefined;
    return error;
  }

  switch (type) {
    case 'email': {
      error = validateEmailLength({
        minLength,
        maxLength,
        length,
        feedbackLabel,
        locale,
      });
      break;
    }

    case 'tel': {
      error = validateTelephoneLength({
        minLength,
        maxLength,
        length,
        feedbackLabel,
        locale,
      });
      break;
    }

    case 'number': {
      if (format === 'tin-no') {
        error = validateTINNumberLength({
          minLength,
          maxLength,
          length,
          feedbackLabel,
          locale,
        });
      }
      break;
    }

    case 'password': {
      error = validatePasswordLength({
        minLength,
        maxLength,
        length,
        feedbackLabel,
        locale,
      });
      break;
    }

    case 'date': {
      error = validateDateLength({
        minLength,
        maxLength,
        length,
        feedbackLabel: translations.insertValidDate,
        locale,
      });
      break;
    }

    case 'preset-select': {
      // This case handles a select input that is pre-filled by the app
      // Whose user input is just for search but not posted.
      // ToDo:: extend this to validate custom user input if its posted
      //  along with the results.
      break;
    }

    default: {
      let tempMinLength = minLength || 2;
      let tempMaxLength = maxLength || 30;

      if (format === 'person-name' || format === 'person-other' || format === 'person-username') {
        tempMinLength = minLength || 2;
        tempMaxLength = maxLength || 50;
      } else if (format === 'person-fullname') {
        tempMinLength = minLength || 3;
        tempMaxLength = maxLength || 80;
      } else if (format === 'person-id') {
        tempMinLength = minLength || 8;
        tempMaxLength = maxLength || 20;
      } else if (format === 'title') {
        tempMinLength = minLength || 1;
        tempMaxLength = maxLength || 60;
      }

      const isShort = length < tempMinLength;

      const msg = mergeLocalizedText({
        texts: [
          feedbackLabel,
          isShort ? translations.tooShort(tempMinLength) : translations.tooLong(tempMaxLength),
          // isShort ? translations.min : translations.max,
          // isShort ? tempMinLength.toString() : tempMaxLength.toString(),
        ],
        locale,
        separator: '',
      });

      error = getErrorMsg(tempMinLength, tempMaxLength, length, msg);
    }
  }

  return error;
};
