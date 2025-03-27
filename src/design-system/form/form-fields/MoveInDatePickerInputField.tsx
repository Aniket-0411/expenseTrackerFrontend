import { formatDateToOtherFormat } from '~/utils';
import { IInputDateElementProps } from '../form.types';
import { InputDateElement } from '../form-elements';
import { TxKeyPath } from '~/i18n';

/**
 * Properties for the Move-In Date Picker Input Field.
 * It extends selective properties from `IInputDateElementProps`.
 */
type IMoveInDatePickerInputFieldProps<T> = Pick<
IInputDateElementProps<T>,
| 'editable'
| 'error'
| 'label'
| 'name'
| 'onBlurCallback'
| 'onChangeCallback'
| 'onError'
| 'placeholder'
| 'required'
| 'value'
> & {
  isDisabled?: boolean;
  leaseStartDate: string;
  leaseEndDate: string;
};

/**
 * Component for selecting the move-in date with minimum and maximum constraints.
 *
 * - Minimum date: `leaseStartDate` or `currentDate`, whichever is later.
 * - Maximum date: `leaseEndDate`.
 */
export function MoveInDatePickerInputField<T>({
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  leaseStartDate,
  leaseEndDate,
  isDisabled = false,
  ...rest
}: IMoveInDatePickerInputFieldProps<T>) {
  let minimumMoveInDate: Date;
  const currentDate = new Date();

  const maximumMoveInDate = leaseEndDate
    ? new Date(formatDateToOtherFormat(leaseEndDate, 'dd/MM/yyyy', 'yyyy-MM-dd'))
    : undefined;

  const formattedLeaseStartDate = leaseStartDate
    ? new Date(formatDateToOtherFormat(leaseStartDate, 'dd/MM/yyyy', 'yyyy-MM-dd'))
    : null;

  if (formattedLeaseStartDate && formattedLeaseStartDate.getTime() < currentDate.getTime()) {
    minimumMoveInDate = currentDate;
  } else {
    minimumMoveInDate = formattedLeaseStartDate || currentDate;
  }

  return (
    <InputDateElement
      constraints={{
        maxDate: maximumMoveInDate,
        minDate: minimumMoveInDate,
        feedbackLabel: 'forms.validation.moveInDate',
      }}
      error={error}
      isDisabled={isDisabled}
      label={label ?? ('forms.labels.moveInDate' as TxKeyPath)}
      name={name}
      onError={onError}
      placeholder={placeholder ?? ('forms.placeholders.moveInDate' as TxKeyPath)}
      required
      value={value}
      {...rest}
    />
  );
}
