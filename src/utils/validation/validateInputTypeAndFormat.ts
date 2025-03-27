/* eslint-disable @typescript-eslint/comma-dangle */

import { TError, IConstraints, TLocale } from '../types';

import { translations } from './translations';
import { validatePhoneNumber } from './validatePhoneNumber';

import { mergeLocalizedText } from '../common';
import { fallbackNonUnicodeRegExp } from './regularExpression';

/**
 * -------------------------------------------------------------------------
 * Validates input based on the constrained format and regular expressions.
 *
 * @param value Value of the input to be validated.
 * @param constraints Options to determine length validation.
 * @returns error Can be as string or undefined.
 */
export const validateInputTypeAndFormat = (
  value: string,
  constraints: IConstraints,
  locale: TLocale
): TError => {
  const { type, format, regExp, feedbackLabel, required, regionCode = 'AE' } = constraints;

  const { length } = value;
  let error: TError;

  if (length <= 0) {
    if (required && feedbackLabel) {
      error = mergeLocalizedText({
        locale,
        texts: [feedbackLabel, translations.isRequired],
      });
      return error;
    }
    error = undefined;
    return error;
  }

  // eslint-disable-next-line no-useless-escape
  let tempRegExp = /^[a-zA-Z0-9._@&\-\/'+:]{2,30}$/;
  let errorMsg: TError;

  switch (type) {
    case 'tel': {
      // ^[0-9][0-9 \-]{1,14}[0-9]$
      // ^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$
      // /^(?:0|\(?\+971\)?\s?|014\s?|039\s?)[1-79](?:[.\-\s]?\d\d){4}$/;

      // Disallow spaces and hyphens between start and end and repetitions.
      tempRegExp = regExp || /^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$/;
      errorMsg = translations.insertValidContact;

      if (format === 'phone-number') {
        const isValidNumber = validatePhoneNumber({ value, regionCode });

        if (!isValidNumber) return errorMsg;
      }
      break;
    }

    case 'email': {
      tempRegExp =
        regExp ||
        /^(?=[a-z][a-z0-9@._-]{5,150}$)[a-z0-9._-]{1,150}@(?:(?=[a-z0-9-]{1,15}\.)[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,6}$/;
      errorMsg = translations.insertValidEmail;
      break;
    }

    case 'password': {
      tempRegExp = regExp || /\.*/;
      errorMsg = translations.insertValidPassword;

      if (constraints.compareWith) {
        const { value: comparedValue, message } = constraints.compareWith;
        if (value !== comparedValue) {
          return message;
        }
      }
      break;
    }

    case 'number': {
      if (format === 'emirates-id-number') {
        tempRegExp = regExp || /^784-?\d{4}-?\d{7}-?\d$/;
        errorMsg = mergeLocalizedText({
          locale,
          texts: [feedbackLabel || translations.thisEmiratesId, translations.isInValid],
        });
      } else if (format === 'identification-no') {
        tempRegExp = regExp || /^[a-zA-Z0-9 ]{6,30}$/;
        errorMsg = mergeLocalizedText({
          locale,
          texts: [feedbackLabel || translations.thisID, translations.isInValid],
        });
      } else if (format === 'tin-no') {
        tempRegExp = regExp || /^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/;
        errorMsg = mergeLocalizedText({
          locale,
          texts: [feedbackLabel || translations.thisTIN, translations.isInValid],
        });
      } else {
        tempRegExp = regExp || /^[0-9\-.]{3,20}$/;
        errorMsg = translations.insertValidID;
      }
      break;
    }

    default: {
      if (format === 'person-name') {
        errorMsg = translations.invalidNameFormat;
        tempRegExp = regExp || /^[a-zA-Z ]{2,50}$/;

        if (!tempRegExp.test(value)) {
          tempRegExp = fallbackNonUnicodeRegExp;
        }
      } else if (format === 'person-other') {
        errorMsg = translations.invalidNameFormat;
        tempRegExp = regExp || /(^$)|^[a-zA-Z ]{2,50}$/; // Match empty or 2-20 char eg Li, Jr

        if (!tempRegExp.test(value)) {
          tempRegExp = fallbackNonUnicodeRegExp;
        }
      } else if (format === 'person-fullname') {
        errorMsg = translations.invalidFullNameFormat;
        tempRegExp = regExp || /^(([a-zA-Z]{3,}) [a-zA-Z'-.]+)$/;
        // regExp || /^[a-zA-Z]]*(([-.' ]|\s)*[a-zA-Z])*[a-zA-Z]{3,60}$/;

        if (!tempRegExp.test(value)) {
          tempRegExp = fallbackNonUnicodeRegExp;
        }
      } else if (format === 'person-username') {
        errorMsg = translations.invalidUsernameOrIDFormat;
        tempRegExp = regExp || /^[a-zA-Z0-9._-]{2,20}$/;
      } else if (format === 'person-id') {
        errorMsg = translations.invalidIDFormat;
        tempRegExp = regExp || /^[A-Z0-9]{8,20}$/;
      } else if (format === 'title') {
        errorMsg = mergeLocalizedText({
          locale,
          texts: [feedbackLabel || translations.thisInput, translations.isInValid],
        });
        tempRegExp =
          regExp ||
          /^(?![ -.&,_'":?!])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!]{2})[a-zA-Z0-9- .#@&,_'":.?!]+$/;

        if (!tempRegExp.test(value)) {
          tempRegExp = fallbackNonUnicodeRegExp;
        }
      } else if (format === 'class-name') {
        errorMsg = mergeLocalizedText({
          locale,
          texts: [feedbackLabel || translations.thisInput, translations.isInValid],
        });
        tempRegExp = regExp || /^[a-zA-Z0-9]*(([-_]|\s)*[a-zA-Z0-9-.])*[a-zA-Z0-9]{1,20}$/g;
      }
    }
  }

  if (!tempRegExp.test(value)) {
    return errorMsg;
  }
  return undefined;
};
