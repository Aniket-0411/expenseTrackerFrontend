import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TEmailAddressInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'autoCapitalize'
  | 'constraints'
  | 'editable'
  | 'error'
  | 'label'
  | 'IconLeft'
  | 'isLabelEnabled'
  | 'keyboardType'
  | 'name'
  | 'onBlurCallback'
  | 'onChangeCallback'
  | 'onError'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'value'
> & {
  hasLabel?: boolean;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the email address of a person or organization,
 * and tries to add constraints that are used to validate the expected format of
 * a valid email.
 */
export function EmailAddressInputField<T>({
  constraints,
  error,
  hasLabel = true,
  label,
  name,
  value,
  ...rest
}: TEmailAddressInputFieldProps<T>) {
  const appLabel = hasLabel ? (label ?? 'forms.labels.emailAddress') : undefined;

  return (
    <InputTextElement
      autoCapitalize="none"
      autoCorrect={false}
      constraints={{
        feedbackLabel: 'forms.validation.theEmailAddress',
        minLength: 7,
        maxLength: 150, // a@bo.ae
        required: true,
        type: 'email',
        ...(constraints || {}),
      }}
      error={error}
      keyboardType="email-address"
      label={appLabel}
      name={name}
      numberOfLines={1}
      placeholder="forms.placeholders.emailAddress"
      returnKeyLabel="next"
      returnKeyType="next"
      value={value}
      {...rest}
    />
  );
}
