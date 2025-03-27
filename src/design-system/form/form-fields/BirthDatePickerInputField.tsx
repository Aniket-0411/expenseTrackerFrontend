import { IInputDateElementProps } from '../form.types';
import { InputDateElement } from '../form-elements';

type IBirthDatePickerInputFieldProps<T> = Pick<
  IInputDateElementProps<T>,
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
 * This is used to capture the date when an individual was born.
 *
 * - Forces the minimum expiry date allowed to be today.
 */
export function BirthDatePickerInputField<T>({
  constraints,
  error,
  label = 'forms.labels.userDob',
  name,
  onError,
  value,
  ...rest
}: IBirthDatePickerInputFieldProps<T>) {
  return (
    <InputDateElement
      constraints={{
        maxDate: new Date(),
        minDate: undefined,
        ...(constraints || {}),
      }}
      error={error}
      label={label}
      name={name}
      onError={onError}
      value={value}
      {...rest}
    />
  );
}
