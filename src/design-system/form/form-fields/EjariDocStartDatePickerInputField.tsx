import { format } from 'date-fns';

import { useMoveInStore } from '~/services';
import { TxKeyPath } from '~/i18n';

import { IInputChanged, IInputDateElementProps } from '../form.types';
import { InputDateElement } from '../form-elements';
import { addDaysToDate, getSubDate } from '~/utils';

type IEjariDocStartDatePickerInputFieldProps<T> = Omit<
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
'onChangeCallback'
> & {
  handleOnInputChange: (options: IInputChanged<T>) => void;
};

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the beginning/start date of the validity of the Ejari
 *
 * - Forces the maximum selectable date allowed to be today.
 */
export function EjariDocStartDatePickerInputField<T>({
  error,
  label,
  name,
  onError,
  placeholder,
  value,
  handleOnInputChange,
  ...rest
}: IEjariDocStartDatePickerInputFieldProps<T>) {
  const currentDate = new Date();
  const currentDateFormatted = format(currentDate, 'dd/MM/yyyy');
  const maximumEjariStartDate = new Date(addDaysToDate(currentDateFormatted, 'dd/MM/yyyy', 'yyyy-MM-dd', 15));
  const minimumEjariStartDate = new Date(getSubDate(15));

  const { projectLocation } = useMoveInStore();

  const defaultInputLabel: TxKeyPath =
    projectLocation === 'Dubai' ? 'forms.labels.ejariStartDate' : 'forms.labels.tawteeqStartDate';

  const defaultInputPlaceholder: TxKeyPath =
    projectLocation === 'Dubai'
      ? 'forms.placeholders.ejariStartDate'
      : 'forms.placeholders.tawteeqStartDate';

  /**
   * Handles the change in the ejari start date input.
   * When the ejari start date is updated, it also automatically calculates
   * and updates the ejari end date by adding 365 days to the ejari start date.
   *
   * @param options - An object containing the properties:
   *   - name: The name of the input field (expected to be 'ejariStartDate').
   *   - value: The new ejari start date (of type Date).
   */
  const handleEjariStartDateChange: (options: IInputChanged<T>) => void = (
    options,
  ) => {
    const ejariEndDate = addDaysToDate(options.value as string, 'dd/MM/yyyy', 'dd/MM/yyyy');
    handleOnInputChange({
      name: 'ejariStartDate' as keyof T,
      value: options.value,
    });

    handleOnInputChange({
      name: 'ejariEndDate' as keyof T,
      value: ejariEndDate,
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
        maxDate: maximumEjariStartDate,
        minDate: minimumEjariStartDate,
        feedbackLabel:
          projectLocation === 'Dubai'
            ? 'forms.validation.ejariStartDate'
            : 'forms.validation.tawteeqStartDate',
      }}
      error={error}
      label={label ?? defaultInputLabel}
      name={name}
      onChangeCallback={handleEjariStartDateChange}
      onError={onError}
      placeholder={placeholder ?? defaultInputPlaceholder}
      required
      value={value}
      {...rest}
    />
  );
}
