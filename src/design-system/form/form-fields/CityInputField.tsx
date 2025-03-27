import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type TCityInputFieldProps<T> = Pick<
  IInputTextElement<T>,
  | 'constraints'
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
 * This is used to capture the `City` tries to add constraints that are used to
 * validate the expected format for the title of the place, without excessive
 * unwanted characters.
 */
export function CityInputField<T>({
  constraints,
  error,
  label,
  name,
  required = true,
  value,
  ...rest
}: TCityInputFieldProps<T>) {
  return (
    <InputTextElement
      constraints={{
        feedbackLabel: 'forms.labels.theCity',
        format: 'title',
        maxLength: 50,
        minLength: 3,
        required,
        ...(constraints || {}),
      }}
      error={error}
      label={label || 'forms.labels.city'}
      name={name}
      value={value}
      {...rest}
    />
  );
}
