import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

/**
 * The type format for OtpInputField that reuses props from `IInputTextElement`.
 */
type TOtpInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'constraints'
  | 'editable'
  | 'error'
  | 'label'
  | 'isLabelEnabled'
  | 'name'
  | 'onBlurCallback'
  | 'onChangeCallback'
  | 'onError'
  | 'onSubmitEditing'
  | 'required'
  | 'value'
>;

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the email address of a person or organization,
 * and tries to add constraints that are used to validate the expected format of
 * a valid email.
 */
export function OtpInputField<T>({
  constraints,
  error,
  label,
  name,
  value,
  ...rest
}: TOtpInputFieldProps<T>) {
  return (
    <InputTextElement
      autoCapitalize="none"
      autoCorrect={false}
      constraints={{
        feedbackLabel: 'forms.labels.theOtp',
        maxLength: 6,
        minLength: 6,
        required: true,
        type: 'number',
        ...(constraints || {}),
      }}
      error={error}
      label={label || 'forms.labels.otp'}
      name={name}
      placeholder="forms.placeholders.otp"
      returnKeyLabel="next"
      returnKeyType="next"
      value={value}
      {...rest}
    />
  );
}
