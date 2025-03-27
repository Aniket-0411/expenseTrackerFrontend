import { TxKeyPath } from '~/i18n';
import { TErrors } from '~/design-system';
import { TError, TTextLocalized } from '~/utils';

export interface IFieldError {
  errorTx?: TxKeyPath;
  errorLocalized?: TTextLocalized;
}

export interface IValidationOptions<T> {
  values: T;
  errors: TErrors<T>;
  others?: Partial<Record<keyof T, string>>;
}

interface IGetFieldErrorOptions {
  /**
   * The input error from input validation.
   */
  error: TError;
  /**
   * The input value string or boolean. True means it's optional.
   */
  value: string | boolean;
  isRequired: boolean;
  /**
   * Custom message to augment the validation error message.
   */
  missingValueMessage: TxKeyPath;
}

/**
 * Calculates the field error from a given error and value. If the value is
 * boolean(true=== the filed is optional), and can be skipped if empty.
 */
export function getFieldError({
  error,
  value,
  isRequired,
  missingValueMessage,
}: IGetFieldErrorOptions) {
  let errorObj: IFieldError[] = [];

  /**
   * If no validation error on last name but it's not added.
   */
  if (!!error || (!value && isRequired)) {
    if (!error) {
      errorObj = [{ errorTx: missingValueMessage }];
    } else {
      errorObj = [{ errorLocalized: error }];
    }
  }

  return errorObj;
}
