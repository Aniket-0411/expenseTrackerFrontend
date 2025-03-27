/* eslint-disable @typescript-eslint/comma-dangle */
import { translate } from '~/i18n';
import { validatePhoneNumber } from '~/utils';

import { ErrorType, IConstraints } from '../form.types';

/**
 * -----------------------------------------------------------------------------
 * Get the error message based on the length of the input.
 *
 * @param minLength
 * @param maxLength
 * @param length
 * @param message
 * @returns
 */
const getErrorMsg = (
  minLength: number,
  maxLength: number,
  length: number,
  message: string
): ErrorType => {
  if (length < minLength || length > maxLength) {
    return message;
  }
  return undefined;
};

/**
 * -----------------------------------------------------------------------------
 * Validates the Length of the input element based on constraints and returns
 * an error message or undefined for valid inputs.
 * Checks if input is required, minimum or maximum length is exceeded.
 * @param value The value of the input.
 * @param constraints Options to determine length validation.
 * @returns error Can be as string or undefined.
 */
const validateLength = (value: string, constraints: IConstraints): ErrorType => {
  const {
    type,
    minLength,
    maxLength,
    required,
    format,
    feedbackLabel = 'forms.labels.this',
  } = constraints;

  const { length } = value;
  let error: ErrorType;

  if (length <= 0) {
    if (required) {
      // error = `${feedbackLabel} is required`;
      error = `${translate(feedbackLabel)} ${translate('forms.validation.isRequired')}`;

      return error;
    }

    error = undefined;
    return error;
  }

  switch (type) {
    case 'email': {
      error = getErrorMsg(
        minLength || 7,
        maxLength || 60,
        length,
        `${translate(feedbackLabel)} ${translate('forms.validation.isToo')} ${
          length < (minLength || 6)
            ? translate('forms.validation.short')
            : translate('forms.validation.long')
        }`
      );
      break;
    }

    case 'tel': {
      error = getErrorMsg(
        minLength || 8,
        maxLength || 14,
        length,
        `${translate(feedbackLabel)} ${translate('forms.validation.isToo')} ${
          length < (minLength || 8)
            ? translate('forms.validation.short')
            : translate('forms.validation.long')
        }`
      );
      break;
    }

    case 'number': {
      if (format === 'tin-no') {
        const tempMinLength = minLength || 9;
        const tempMaxLength = maxLength || 11;

        const minLengthError = `${translate(
          'forms.validation.short'
        )} (${translate('forms.validation.min')}: ${tempMinLength})`;

        const maxLengthError = `${translate(
          'forms.validation.long'
        )} (${translate('forms.validation.max')}: ${tempMaxLength})`;

        const lengthLabel = length < tempMinLength ? minLengthError : maxLengthError;

        error = getErrorMsg(
          tempMinLength,
          tempMaxLength,
          length,
          `${translate(feedbackLabel)} ${translate('forms.validation.isToo')} ${lengthLabel}`
        );
      }
      break;
    }

    case 'password': {
      error = getErrorMsg(
        minLength || 4,
        maxLength || 20,
        length,
        `${translate(feedbackLabel)} ${translate(
          'forms.validation.mustBeBetween'
        )} ${minLength || 4} - ${maxLength || 20} ${translate('forms.validation.characters')}`
      );
      break;
    }

    case 'date': {
      error = getErrorMsg(
        minLength || 8,
        maxLength || 14,
        length,
        translate('forms.validation.insertValidDate') || ''
      );
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
      } else if (format === 'emirates-id-number') {
        tempMinLength = minLength || 15;
        tempMaxLength = maxLength || 18;
      }

      const minLengthError = `${translate(
        'forms.validation.short'
      )} (${translate('forms.validation.min')}: ${tempMinLength})`;

      const maxLengthError = `${translate(
        'forms.validation.long'
      )} (${translate('forms.validation.max')}: ${tempMaxLength})`;

      const lengthLabel = length < tempMinLength ? minLengthError : maxLengthError;

      error = getErrorMsg(
        tempMinLength,
        tempMaxLength,
        length,
        `${translate(feedbackLabel)} is too ${lengthLabel}`
      );
    }
  }

  return error;
};

/**
 * -----------------------------------------------------------------------------
 * Validates input based on the constrained format and regular expressions.
 *
 * @param value Value of the input to be validated.
 * @param constraints Options to determine length validation.
 * @returns error Can be as string or undefined.
 */
const validateTypeAndFormat = (value: string, constraints: IConstraints): ErrorType => {
  const { type, format, regExp, feedbackLabel, required, regionCode = 'AE' } = constraints;
  const feedbackError = feedbackLabel ? translate(feedbackLabel) : '';

  const { length } = value;
  let error: ErrorType;

  if (length <= 0) {
    if (required) {
      error = `${feedbackError} ${translate('forms.validation.isRequired')}`;

      return error;
    }

    error = '';

    return error;
  }

  // eslint-disable-next-line no-useless-escape
  let tempRegExp = /^[a-zA-Z0-9._@&\-\/'+:]{2,30}$/;
  let errorMsg: ErrorType;

  switch (type) {
    case 'tel': {
      // ^[0-9][0-9 \-]{1,14}[0-9]$
      // ^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$
      // /^(?:0|\(?\+971\)?\s?|014\s?|039\s?)[1-79](?:[.\-\s]?\d\d){4}$/;

      // Disallow spaces and hyphens between start and end and repetitions.
      tempRegExp = regExp || /^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$/;
      errorMsg = translate('forms.validation.insertValidContactNumber');
      if (format === 'phone-number') {
        const isValidNumber = validatePhoneNumber({ value, regionCode });

        if (!isValidNumber) return errorMsg;
      }
      break;
    }
    // TODO:@Sowed to look at this later to confirm this bug fix
    // eslint-disable-next-line max-len
    /// ^(?=[a-z][a-z0-9@._-]{5,40}$)[a-z0-9._-]{1,20}@(?:(?=[a-z0-9-]{1,15}\.)[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,6}$/;
    case 'email': {
      tempRegExp =
        regExp ||
        /^(?=[a-z][a-z0-9@._-]{5,63}$)[a-z0-9._-]{1,40}@(?:(?=[a-z0-9-]{1,15}\.)[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,6}$/;
      errorMsg = translate('forms.validation.insertValidEmailAddress');
      break;
    }

    case 'password': {
      tempRegExp = regExp || /\.*/;
      errorMsg = translate('forms.validation.insertValidPassword');

      if (constraints.compareWith) {
        const { value: comparedValue, message } = constraints.compareWith;

        if (value !== comparedValue) {
          return translate(message);
        }
      }
      break;
    }

    case 'number': {
      if (format === 'identification-no') {
        tempRegExp = regExp || /^[a-zA-Z0-9 ]{6,30}$/;
        errorMsg = `${
          feedbackError || translate('forms.validation.thisId')
        } ${translate('forms.validation.invalidFormat')}`;
      } else if (format === 'tin-no') {
        tempRegExp = regExp || /^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/;
        errorMsg = `${
          feedbackError || translate('forms.validation.thisTIN')
        } ${translate('forms.validation.invalidFormat')}`;
      } else {
        tempRegExp = regExp || /^[0-9\-.]{1,20}$/;
        errorMsg = translate('forms.validation.insertNumber');
      }
      break;
    }

    default: {
      if (format === 'person-name') {
        tempRegExp = regExp || /^[a-zA-Z ]{2,50}$/;
        errorMsg = translate('forms.validation.invalidNameFormat');
      } else if (format === 'person-other') {
        tempRegExp = regExp || /(^$)|^[a-zA-Z ]{2,50}$/; // Match empty or 2-20 char eg Li, Jr
        errorMsg = translate('forms.validation.invalidNameFormat');
      } else if (format === 'person-fullname') {
        // ToDo: Fix this. Validation fails on space within person-fullname
        tempRegExp = regExp || /^[a-zA-Z]]*(([-.' ]|\s)*[a-zA-Z])*[a-zA-Z]{3,60}$/;
        errorMsg = translate('forms.validation.invalidFullNameFormat');
      } else if (format === 'person-username') {
        tempRegExp = regExp || /^[a-zA-Z0-9._-]{2,20}$/;
        errorMsg = translate('forms.validation.invalidNameOrIdFormat');
      } else if (format === 'person-id') {
        tempRegExp = regExp || /^[A-Z0-9]{8,20}$/;
        errorMsg = translate('forms.validation.invalidIdFormat');
      } else if (format === 'title') {
        tempRegExp =
          regExp ||
          /^(?![ -.&,_'":?!])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!]{2})[a-zA-Z0-9- .#@&,_'":.?!]+$/;
        errorMsg = `${
          feedbackError || translate('forms.validation.thisInput')
        } ${translate('forms.validation.invalidFormat')}`;
      } else if (format === 'emirates-id-number') {
        tempRegExp = regExp || /^784-?\d{4}-?\d{7}-?\d$/;
        errorMsg = translate('forms.validation.invalidEmiratesIdFormat');
      }
    }
  }

  if (!tempRegExp.test(value)) {
    return errorMsg;
  }

  return '';
};

interface ValidateOptionsType {
  value: string;
  constraints: IConstraints;
}

/**
 * -----------------------------------------------------------------------------
 * Validates the Min/Max range of the input value based on constraints and
 * returns an error message or undefined for valid inputs.
 *
 * @param value The value of the input, can be a number or date.
 * @param constraints Options to determine min/max validation.
 * @returns error Can be as string or undefined.
 */
const validateMinMaxValue = (value: number, constraints: IConstraints): ErrorType => {
  const { minValue, maxValue, type } = constraints;

  let error: ErrorType;

  // Handle empty value case
  if (value === undefined || value === null) {
    return undefined;
  }

  // Handle numeric values
  if (type === 'number') {
    if (minValue !== undefined && value < minValue) {
      error = `${translate('forms.validation.minValue')} ${minValue - 1}`;
    } else if (maxValue !== undefined && value > maxValue) {
      error = `${translate('forms.validation.maxValue')} ${maxValue}`;
    }
  }

  return error;
};

/**
 * -----------------------------------------------------------------------------
 * Validates target input item based on the constraints.
 * - See also `packages/utils/src/validators/validate.ts`
 *
 * @param options Target value and constraints to be validated against.
 * @returns error Can be as string or undefined.
 */
export const validateInputValue = ({ value, constraints }: ValidateOptionsType): ErrorType => {
  const tempValue =
    constraints?.type === 'password' ? value : value.toString().toLocaleLowerCase().trim();

  // Validate Length of Input and Escape Early.
  let error = validateLength(tempValue, constraints);

  let parsedValue: number | string = tempValue;

  if (constraints.type === 'number') {
    parsedValue = Number(tempValue);
    error = validateMinMaxValue(parsedValue, constraints);
  }

  if (error) {
    return error;
  }

  // If length passes, validate type and format.
  error = validateTypeAndFormat(tempValue, constraints);

  return error;
};
