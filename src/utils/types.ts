/**
 * Allows defining a string type that can be either a string or a string literal.
 */
export type TStringWithAutoComplete<T> = T | (string & Record<never, never>);

/**
 * The expected value of the input to be passed under validation utils.
 */
export type TValue = string | number | boolean | string[];

/**
 * Provides instances of supported locales.
 * This is duplicated from `packages/i18n` to avoid dependencies here.
 */
export type TLocale = 'en' | 'ar';

export type TTranslatedText = Record<TLocale, string>;

/**
 * Provides a strongly typed text string based on locale.
 * This is duplicated from `packages/i18n` to avoid dependencies here.
 */
export type TTextLocalized = string | TTranslatedText;

/**
 * Error type for handling non form field errors. Useful for denoting errors
 * customized for the UI
 */
export type TUIError = {
  message: string | TTextLocalized;
  description?: string | TTextLocalized;
} | null;

/**
 * Value of the error returned/displayed on the UI
 */
export type TError = TTextLocalized | undefined;

/**
 * This defines a set of properties to check against when validating the input
 * content.
 */
export interface IConstraints {
  /**
   * This is not to be confused with the html `type` attribute. This adds
   * additional validation constraints and can be a value not supported by html type.
   */
  type?: 'email' | 'tel' | 'number' | 'password' | 'date' | 'preset-select';
  /**
   * Whether this input is optional or required.
   */
  required?: boolean;
  /**
   * The minimum length of the input field below which it would trigger the error.
   */
  minLength?: number;
  /**
   * The maximum length of the input field below which it would trigger the error.
   */
  maxLength?: number;
  /**
   * The minimum value for inputs of type 'number'.
   */
  minValue?: number;
  /**
   * The maximum value for inputs of type 'number'.
   */
  maxValue?: number;
  /**
   * The primitive formats that determine how the input should be validated.
   * For example a `person-name` shouldn't include special characters.
   */
  format?:
    | 'class-name'
    | 'email'
    | 'identification-no'
    | 'emirates-id-number'
    | 'password'
    | 'person-fullname'
    | 'person-id'
    | 'person-name'
    | 'person-other'
    | 'person-username'
    | 'phone-number'
    | 'tin-no'
    | 'title'
    | 'numbers-only';

  /**
   * The region code to be used in validating the phone number input.
   */
  regionCode?: TStringWithAutoComplete<'AE' | 'SA' | 'IQ' | 'GLOBAL'>;
  /**
   * The regular expression to be used in validating ths string.
   */
  regExp?: RegExp;
  /**
   * This is used for the custom feedback messages on the input fields.
   */
  feedbackLabel?: TTextLocalized;
  listData?: boolean;
  compareWith?: {
    /**
     * The value to compare with for validity.
     */
    value: string | number;
    /**
     * Expected message to be returned if validation fails.
     */
    message: TTextLocalized;
  };
  /**
   * Value to prefix to the input value before/after validation.
   */
  valuePrefix?: string;
}

export interface IValidateOptions {
  /**
   * The current locale to aid is generating the translated errors.
   */
  locale: TLocale;
  /**
   * The constraints to be used when validating the event target values.
   */
  constraints: IConstraints;
  /**
   * The event target of of the input to be validated.
   */
  target: EventTarget & (HTMLInputElement | HTMLTextAreaElement);
}
