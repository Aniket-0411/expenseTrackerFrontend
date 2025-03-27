import { useMoveInStore } from '~/services';
import { TxKeyPath } from '~/i18n';
import { addDaysToDate } from '~/utils';

import { IInputChanged, IInputDateElementProps } from '../form.types';
import { InputDateElement } from '../form-elements';

/**
 * Properties for the Birth Date Picker Input Field, based on
 * `IInputDateElementProps` with selective fields.
 *
 * - Inherits most properties from `IInputDateElementProps<T>`, excluding `ejariStartDate`.
 * - Redefines `ejariStartDate` as an optional string, specifically for string date representation.
 *
 * @template T - Generic type parameter for flexibility in component typing.
 */
type IEjariDocEndDatePickerInputFieldProps<T> = Omit<
Pick<
IInputDateElementProps<T>,
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
>,
'ejariStartDate'
| 'onChangeCallback'
> & {
  ejariStartDate: string;
  handleOnInputChange: (options: IInputChanged<T>) => void;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the expiry/end date of the validity of the Ejari
 *
 * - Forces the minimum selectable date allowed to be today.
 */
export function EjariDocEndDatePickerInputField<T>({
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  ejariStartDate = '',
  handleOnInputChange,
  ...rest
}: IEjariDocEndDatePickerInputFieldProps<T>) {
  const maximumEjariEndDate = new Date(addDaysToDate(ejariStartDate, 'dd/MM/yyyy', 'yyyy-MM-dd'));
  const nextDayAfterLeaseStart = new Date(
    addDaysToDate(ejariStartDate, 'dd/MM/yyyy', 'yyyy-MM-dd', 1),
  );
  let minimumEjariEndDate: Date;
  if (nextDayAfterLeaseStart > new Date()) {
    minimumEjariEndDate = nextDayAfterLeaseStart;
  } else {
    minimumEjariEndDate = new Date();
  }

  const { projectLocation } = useMoveInStore();

  const defaultInputLabel: TxKeyPath =
    projectLocation === 'Dubai' ? 'forms.labels.ejariEndDate' : 'forms.labels.tawteeqEndDate';

  const defaultInputPlaceholder: TxKeyPath =
    projectLocation === 'Dubai'
      ? 'forms.placeholders.ejariEndDate'
      : 'forms.placeholders.tawteeqEndDate';

  /**
   * Handles the change in the ejari end date input.
   *
   * @param options - An object containing the properties:
   *   - name: The name of the input field (expected to be 'ejariEndDate').
   *   - value: The new ejari end date (of type Date).
   */
  const handleEjariEndDateChange: (options: IInputChanged<T>) => void = (options) => {
    handleOnInputChange({
      name: 'ejariEndDate' as keyof T,
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
        maxDate: maximumEjariEndDate,
        minDate: minimumEjariEndDate,
        feedbackLabel:
          projectLocation === 'Dubai'
            ? 'forms.validation.ejariEndDate'
            : 'forms.validation.tawteeqEndDate',
      }}
      error={error}
      label={label ?? defaultInputLabel}
      name={name}
      onChangeCallback={handleEjariEndDateChange}
      onError={onError}
      placeholder={placeholder ?? defaultInputPlaceholder}
      required
      value={value}
      {...rest}
    />
  );
}
