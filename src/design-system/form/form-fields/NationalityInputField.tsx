import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TNationalityInputFieldProps<T> = Pick<
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
 * This is used to capture the a person's country of nationality
 */
export function NationalityInputField<T>({
  constraints,
  error,
  label,
  name,
  value,
  ...rest
}: TNationalityInputFieldProps<T>) {
  return (
    <InputTextElement
      constraints={{
        feedbackLabel: 'forms.validation.theNationality',
        maxLength: 50,
        minLength: 2,
        required: true,
        ...(constraints || {}),
      }}
      error={error}
      label={label ?? 'forms.labels.nationality'}
      name={name}
      placeholder="forms.placeholders.nationality"
      value={value}
      {...rest}
    />
  );
}
