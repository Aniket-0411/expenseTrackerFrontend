import { addDaysToDate } from '~/utils';
import { InputDateElement } from '../form-elements';
import { IInputChanged, IInputDateElementProps } from '../form.types';

/**
 * Lease End Date Picker Input Field Props
 *
 * Inherits most properties from `IInputDateElementProps<T>`.
 * Excludes constraints since they are calculated internally.
 * Adds `leaseStartDate` as a required prop for calculating minimum date.
 *
 * @template T - Generic type parameter for flexibility in component typing.
 */
type LeaseEndDatePickerProps<T> = Omit<
IInputDateElementProps<T>,
'constraints' | 'onChangeCallback'
> & {
  leaseStartDate: string;
  handleOnInputChange: (options: IInputChanged<T>) => void;
};

/**
 * Lease End Date Picker Input Field Component
 *
 * Encapsulates the logic for calculating minimum and maximum lease end dates.
 * Minimum date: lease start date (if provided).
 * Maximum date: lease start date (if provided).
 *
 * @template T - Generic type parameter for flexibility in component typing.
 */
export function LeaseEndDatePickerInputField<T>({
  leaseStartDate,
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  handleOnInputChange,
  ...rest
}: LeaseEndDatePickerProps<T>) {
  const nextDayAfterLeaseStart = new Date(
    addDaysToDate(leaseStartDate, 'dd/MM/yyyy', 'yyyy-MM-dd', 1),
  );
  let minimumLeaseEndDate: Date;
  if (nextDayAfterLeaseStart > new Date()) {
    minimumLeaseEndDate = nextDayAfterLeaseStart;
  } else {
    minimumLeaseEndDate = new Date();
  }

  const maximumLeaseEndDate = new Date(addDaysToDate(leaseStartDate, 'dd/MM/yyyy', 'yyyy-MM-dd'));

  /**
   * Handles the change in the lease end date input.
   *
   * @param options - An object containing the properties:
   *   - name: The name of the input field (expected to be 'leaseEndDate').
   *   - value: The new lease end date (of type Date).
   */
  const handleLeaseEndDateChange: (options: IInputChanged<T>) => void = (options) => {
    handleOnInputChange({
      name: 'leaseEndDate' as keyof T,
      value: options.value,
    });
    /**
     * When end date is changed it affects the move in date so resetting
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
        maxDate: maximumLeaseEndDate,
        minDate: minimumLeaseEndDate,
        feedbackLabel: 'forms.validation.leaseExpiryDate',
      }}
      error={error}
      label={label ?? 'forms.labels.leaseExpiryDate'}
      name={name}
      onChangeCallback={handleLeaseEndDateChange}
      onError={onError}
      placeholder={placeholder ?? 'forms.placeholders.leaseExpiryDate'}
      value={value}
      {...rest}
    />
  );
}
