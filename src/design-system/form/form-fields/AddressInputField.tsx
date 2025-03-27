import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type IAddressInputFieldProps<T> = Pick<
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
 * This is used to capture the address of an individual and tries to add
 *  constraints that are used to validate the expected format for the title of
 * the place, without excessive unwanted characters.
 */
export function AddressInputField<T>({
  constraints,
  error,
  label = 'forms.labels.address',
  name,
  required = true,
  value,
  ...rest
}: IAddressInputFieldProps<T>) {
  return (
    <InputTextElement
      constraints={{
        feedbackLabel: 'forms.labels.theAddress',
        format: 'title',
        maxLength: 50,
        minLength: 2,
        required,
        /**
         * Test it out at: https://regex101.com/r/CtqxiP/1
         */
        regExp:
          /^(?![ -.&,_'":?!/])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!/]{2})[a-zA-Z0-9- .#@&,_'":.?!/]+$/,
        ...(constraints || {}),
      }}
      error={error}
      label={label}
      name={name}
      value={value}
      {...rest}
    />
  );
}
