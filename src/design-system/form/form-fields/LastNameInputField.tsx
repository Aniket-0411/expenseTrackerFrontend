import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TLastNameInputField<T> = Pick<
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
  | 'required'
  | 'value'
>;

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the last name of a person, and tries to add
 *  constraints that are used to validate the expected format of person's
 * last name.
 */
export function LastNameInputField<T>({
  constraints,
  error,
  label,
  name,
  value,
  ...rest
}: TLastNameInputField<T>) {
  return (
    <InputTextElement
      constraints={{
        feedbackLabel: 'forms.validation.theLastName',
        format: 'person-name',
        maxLength: 50,
        minLength: 2,
        required: true,
        ...(constraints || {}),
      }}
      error={error}
      label={label ?? 'forms.labels.lastName'}
      name={name}
      placeholder="forms.placeholders.lastName"
      value={value}
      {...rest}
    />
  );
}
