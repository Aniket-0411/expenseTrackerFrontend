/* eslint-disable @typescript-eslint/indent */

import { MutableRefObject, ReactNode, Ref } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from 'react-native';

import { IConstraints as IConstraintsBase } from '~/utils';

import { TxKeyPath, TTxOptions, TLocalizedText, TTextLocalized } from '~/i18n';
import { BoxPropsType } from '~/theme';

import { TSvgIconElement } from '../icons';

export type ErrorType = string | undefined;

/**
 * Value of the error returned/displayed on the UI
 */
export type TError = ErrorType | TTextLocalized;

/**
 * The expected value of the input to be passed under validation utils.
 */
export type TValue = string | number | boolean | string[];

export interface IInputChanged<T> {
  name: keyof T;
  value: TValue;
}

export interface IFormFieldError<T> {
  error?: TError;
  name: keyof T;
}

/**
 * Keep in sync with `packages/utilities/src/types.ts/IConstraints`
 */
export interface IConstraints extends Omit<IConstraintsBase, 'feedbackLabel' | 'compareWith'> {
  /**
   * Used to customize feedback messages. Override the default feedbackLabel type
   * for the input to provide better mobile translation support on the feedback.
   */
  feedbackLabel?: TxKeyPath;
  compareWith?: {
    value: string | number;
    /**
     * Override the default message for the compareWith constraint to provide
     * the validation error message in the correct translation for mobile.
     */
    message: TxKeyPath;
  };
}

export type TInputFocusAndBlurEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export type TInputChangeEvent = NativeSyntheticEvent<TextInputChangeEventData>;

// export type TOnErrorFn = (error: { name: string; error?: string }) => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TOnErrorFn<T = any> = (errorObj: IFormFieldError<T>) => void;

export type TOnChangeFn = (e: TInputChangeEvent | (() => string)) => void;

/**
 * The type of the ref declared in the component.
 */
export type TTextInputRef = Ref<RNTextInput | null>;

/**
 * The actual value of the ref when the ref is accessed.
 */
export type TTextInputRefValueType = MutableRefObject<RNTextInput | null> | null;

/**
 * [RNTextInputProps](https://reactnative.dev/docs/textinput#props)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IBaseTextInputProps<T = any> extends Omit<RNTextInputProps, 'ref'> {
  autoFocus?: boolean;
  boxProps?: BoxPropsType;
  boxPropsInputContainer?: BoxPropsType;
  error?: TError;
  handleClearInput?: () => void;
  hasClearButton?: boolean;
  IconLeft?: TSvgIconElement;
  id?: string;
  iconRight?: ReactNode;
  inputDebounceDelay?: number;
  isLabelEnabled?: boolean;
  isLabelFloating?: boolean;
  label?: TxKeyPath;
  labelTxOptions?: TTxOptions;
  labelLocalized?: TLocalizedText;
  labelPostFix?: TxKeyPath;
  labelPostFixTxOptions?: TTxOptions;
  name: keyof T;
  onError?: (errorObj: IFormFieldError<T>) => void;
  placeholder?: TxKeyPath;
  placeholderTxOptions?: TTxOptions;
  placeholderLocalized?: TLocalizedText;
  required?: boolean;
  showIsRequired?: boolean;
  subLabel?: TTextLocalized;
  value: string;
  valuePrefix?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IInputTextElement<T = any> extends IBaseTextInputProps {
  constraints?: IConstraints;
  onBlurCallback: (options: IInputChanged<T>) => void;
  onChangeCallback: (options: IInputChanged<T>) => void;
  onError: (errorObj: IFormFieldError<T>) => void;
  inputRef?: TTextInputRefValueType;
}

export type TInputTextElementProps = IInputTextElement &
  IBaseTextInputProps & {
    constraints?: IConstraints;
    hasClearButton?: boolean;
  };

export interface IDropDowItem {
  label: string;
  isSelected?: boolean;
  value?: unknown;
}

export type TOnDropdownChangeFn = (label: IDropDowItem['label'], item?: IDropDowItem) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IInputDropdownElementProps<T = any> {
  boxProps?: BoxPropsType;
  constraints?: IConstraints;
  enableSearch?: boolean;
  error: TError;
  handleOnFetchRetry?: () => void;
  hasNetworkError?: string;
  isLoading?: boolean;
  items: IDropDowItem[];
  label: TxKeyPath;
  labelTxOptions?: TTxOptions;
  maxInputLength: number;
  modalTitle?: TxKeyPath;
  name: keyof T | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (errorObj: IFormFieldError<any>) => void;
  onValueChange: TOnDropdownChangeFn;
  required?: boolean;
  searchOptions?: {
    placeholder?: TxKeyPath;
  };
  selectedItem?: IDropDowItem;
  value?: string;
}

export type IBaseInputDropdownElementProps<T> = Pick<
  IInputDropdownElementProps<T>,
  'error' | 'name' | 'onError' | 'value'
> & {
  label?: TxKeyPath;
  onChange: IInputDropdownElementProps<T>['onValueChange'];
};

export interface IPickerItemProps extends BoxPropsType {
  onSelectItem(item: IDropDowItem): void;
  item: IDropDowItem;
}

export interface IPickerModalProps {
  enableSearch?: boolean;
  handleCloseModal(): void;
  isVisible: boolean;
  items: IDropDowItem[];
  modalTitle: TxKeyPath;
  maxInputLength?: number;
  maxToRenderPerBatch?: number;
  onItemSelection(item: IDropDowItem): void;
  searchOptions?: {
    placeholder?: TxKeyPath;
    placeholderTxOptions?: TTxOptions;
  };
  selectedItem?: IDropDowItem;
  value: string;
}

export interface DateConstraintsType {
  maxDate?: Date;
  minDate?: Date;
  required?: boolean;
  feedbackLabel?: TxKeyPath;
}

export interface IInputDateElementProps<T> extends IBaseTextInputProps {
  constraints: DateConstraintsType;
  onBlurCallback: (options: IInputChanged<T>) => void;
  onChangeCallback: (options: IInputChanged<T>) => void;
  onError: (errorObj: IFormFieldError<T>) => void;
  isDisabled?: boolean;
}
