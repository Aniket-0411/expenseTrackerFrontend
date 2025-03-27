import { addDaysToDate, getSubDate, format } from '~/utils';
import { InputDateElement } from '../form-elements';
import { IInputChanged, IInputDateElementProps } from '../form.types';

/**
 * Lease Start Date Picker Input Field Props
 *
 * Inherits most properties from `IInputDateElementProps<T>`.
 * Excludes constraints since they are calculated internally.
 *
 * @template T - Generic type parameter for flexibility in component typing.
 */
type LeaseStartDatePickerProps<T> = Omit<
IInputDateElementProps<T>,
'constraints' | 'onChangeCallback'
> & {
  handleOnInputChange: (options: IInputChanged<T>) => void;
};

/**
 * Lease Start Date Picker Input Field Component
 *
 * Encapsulates the logic for calculating minimum and maximum lease start dates.
 * Minimum date: 15 days before today.
 * Maximum date: 15 days after today.
 *
 * @template T - Generic type parameter for flexibility in component typing.
 */
export function LeaseStartDatePickerInputField<T>({
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  handleOnInputChange,
  ...rest
}: LeaseStartDatePickerProps<T>) {
  const currentDateFormatted = format(new Date(), 'dd/MM/yyyy');
  const maximumLeaseStartDate = new Date(
    addDaysToDate(currentDateFormatted, 'dd/MM/yyyy', 'yyyy-MM-dd', 15),
  );
  const minimumLeaseStartDate = new Date(getSubDate(15));

  /**
   * Handles the change in the lease start date input.
   * When the lease start date is updated, it also automatically calculates
   * and updates the lease end date by adding 365 days to the lease start date.
   *
   * @param options - An object containing the properties:
   *   - name: The name of the input field (expected to be 'leaseStartDate').
   *   - value: The new lease start date (of type Date).
   */
  const handleLeaseStartDateChange: (options: IInputChanged<T>) => void = (
    options,
  ) => {
    const leaseEndDate = addDaysToDate(options.value as string, 'dd/MM/yyyy', 'dd/MM/yyyy');
    handleOnInputChange({
      name: 'leaseStartDate' as keyof T,
      value: options.value,
    });

    handleOnInputChange({
      name: 'leaseEndDate' as keyof T,
      value: leaseEndDate,
    });

    /**
     * When start date is changed it affects the move in date so resetting
     * move in date.
     */
    handleOnInputChange({
      name: 'moveInDate' as keyof T,
      value: '',
    });
  };

  return (
    <InputDateElement
      constraints={{
        maxDate: maximumLeaseStartDate,
        minDate: minimumLeaseStartDate,
        feedbackLabel: 'forms.validation.leaseStartDate',
      }}
      error={error}
      label={label ?? 'forms.labels.leaseStartDate'}
      name={name}
      onChangeCallback={handleLeaseStartDateChange}
      onError={onError}
      placeholder={placeholder ?? 'forms.placeholders.leaseStartDate'}
      value={value}
      {...rest}
    />
  );
}
