import { TxKeyPath } from '~/i18n';

import { IInputDateElementProps } from '../form.types';
import { InputDateElement } from '../form-elements';

type IBirthDatePickerInputFieldProps<T> = Pick<
IInputDateElementProps<T>,
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
| 'isDisabled'
> & {
  label: TxKeyPath;
  placeholder: TxKeyPath;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to render a generic date picker input field.
 *
 * - Forces the minimum selectable date allowed to be today.
 */
export function DatePickerInputField<T>({
  constraints,
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  isDisabled = false,
  ...rest
}: IBirthDatePickerInputFieldProps<T>) {
  return (
    <InputDateElement
      constraints={{
        maxDate: new Date(),
        minDate: new Date(),
        ...(constraints || {}),
      }}
      error={error}
      isDisabled={isDisabled}
      label={label}
      name={name}
      onError={onError}
      placeholder={placeholder}
      required
      value={value}
      {...rest}
    />
  );
}
