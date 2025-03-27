import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TFirstNameInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'autoFocus'
  | 'constraints'
  | 'error'
  | 'editable'
  | 'label'
  | 'isLabelEnabled'
  | 'isLabelFloating'
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
 * This is used to capture the first name of a person, and tries to add
 *  constraints that are used to validate the expected format of person's
 * first name.
 */
export function FirstNameInputField<T>({
  autoFocus,
  constraints,
  error,
  label,
  name,
  value,
  ...rest
}: TFirstNameInputFieldProps<T>) {
  return (
    <InputTextElement
      autoFocus={autoFocus}
      constraints={{
        feedbackLabel: 'forms.validation.theFirstName',
        format: 'person-name',
        maxLength: 50,
        minLength: 2,
        required: true,
        ...(constraints || {}),
      }}
      error={error}
      label={label ?? 'forms.labels.firstName'}
      name={name}
      placeholder="forms.placeholders.firstName"
      value={value}
      {...rest}
    />
  );
}
