import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type IVISANumberInputFieldProps<T> = Pick<
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
 * This captures the VISA number of an individual.
 */
export function VISANumberInputField<T>({
  constraints,
  error,
  label,
  name,
  onError,
  required = false,
  value,
  ...rest
}: IVISANumberInputFieldProps<T>) {
  return (
    <InputTextElement
      autoCapitalize="characters"
      constraints={{
        feedbackLabel: 'forms.labels.theVisaNumber',
        format: 'identification-no',
        maxLength: 16,
        minLength: 6,
        required,
        type: 'number',
        ...(constraints || {}),
      }}
      error={error}
      label={label ?? 'forms.labels.visaNumber'}
      name={name}
      onError={onError}
      value={value}
      {...rest}
    />
  );
}
