import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TPasswordInputFieldProps<T> = Pick<
IInputTextElement<T>,
| 'autoCapitalize'
| 'constraints'
| 'editable'
| 'error'
| 'hasClearButton'
| 'IconLeft'
| 'iconRight'
| 'inputRef'
| 'isLabelEnabled'
| 'label'
| 'name'
| 'onBlurCallback'
| 'onChangeCallback'
| 'onError'
| 'onSubmitEditing'
| 'placeholder'
| 'required'
| 'returnKeyLabel'
| 'returnKeyType'
| 'secureTextEntry'
| 'value'
> & {
  hasLabel?: boolean;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the user's password input
 */
export function PasswordInputField<T>({
  constraints,
  error,
  hasLabel = true,
  label,
  name,
  placeholder,
  returnKeyLabel = 'done',
  returnKeyType = 'done',
  secureTextEntry,
  value,
  ...rest
}: TPasswordInputFieldProps<T>) {
  const appLabel = hasLabel ? (label ?? 'forms.labels.password') : undefined;

  return (
    <InputTextElement
      autoCapitalize="none"
      autoCorrect={false}
      constraints={{
        feedbackLabel: 'forms.labels.thePassword',
        format: 'password',
        type: 'password',
        maxLength: 30,
        minLength: 8,
        required: true,
        ...(constraints || {}),
      }}
      error={error}
      isLabelFloating
      keyboardType="default"
      label={appLabel}
      name={name}
      placeholder={placeholder ?? 'forms.placeholders.password'}
      returnKeyLabel={returnKeyLabel}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      value={value}
      {...rest}
    />
  );
}
