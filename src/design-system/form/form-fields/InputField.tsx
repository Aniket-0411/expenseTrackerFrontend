import { TxKeyPath } from '~/i18n';

import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';
import { BoxProps } from '@shopify/restyle';
import { BoxPropsType, TBaseTextProps } from '~/theme';

type IInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'autoCapitalize'
  | 'constraints'
  | 'editable'
  | 'error'
  | 'label'
  | 'isLabelEnabled'
  | 'name'
  | 'onBlurCallback'
  | 'onChangeCallback'
  | 'onError'
  | 'placeholder'
  | 'required'
  | 'value'
  | 'inputMode'
  | 'style'
> & {
  label?: TxKeyPath;
  placeholder: TxKeyPath;
  keyboardType?: 'numeric' | 'default';
  returnKeyType?: 'next' | 'done';
  boxPropsInputContainer?: BoxPropsType;
};

/**
 * -----------------------------------------------------------------------------
 * This renders a generic input field.
 */
export function InputField<T>({
  error,
  label,
  name,
  onError,
  placeholder,
  required = false,
  keyboardType = 'default',
  returnKeyType = 'next',
  value,
  boxPropsInputContainer,
  ...rest
}: IInputFieldProps<T>) {
  return (
    <InputTextElement
      error={error}
      keyboardType={keyboardType}
      label={label}
      name={name}
      onError={onError}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      value={value}
      boxPropsInputContainer={boxPropsInputContainer}
      {...rest}
    />
  );
}
