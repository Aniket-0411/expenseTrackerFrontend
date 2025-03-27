import { TxKeyPath } from '~/i18n';

import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type ITextAreaFieldProps<T> = Pick<
IInputTextElement<T>,
| 'autoCapitalize'
| 'boxPropsInputContainer'
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
> & {
  label: TxKeyPath;
  placeholder: TxKeyPath;
};

/**
 * -----------------------------------------------------------------------------
 * This renders a wide text area input with support for mult line text.
 */
export function TextAreaField<T>({
  boxPropsInputContainer,
  constraints,
  error,
  label,
  name,
  onError,
  placeholder,
  required = false,
  value,
  ...rest
}: ITextAreaFieldProps<T>) {
  return (
    <InputTextElement
      autoCapitalize="none"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      boxPropsInputContainer={{
        borderRadius: 's',
        mb: 's',
        ...boxPropsInputContainer,
      }}
      constraints={{
        maxLength: 1000,
        required,
        ...(constraints || {}),
      }}
      editable
      error={error}
      label={label}
      maxLength={2000}
      multiline
      name={name}
      numberOfLines={5}
      onError={onError}
      placeholder={placeholder}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        minHeight: 100,
        textAlignVertical: 'top',
        width: '100%',
      }}
      value={value}
      {...rest}
    />
  );
}
