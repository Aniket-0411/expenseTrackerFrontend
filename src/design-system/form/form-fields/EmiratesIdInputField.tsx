import { Platform } from 'react-native';
import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type IEmiratesIdInputFieldProps<T> = Pick<
IInputTextElement<T>,
| 'constraints'
| 'error'
| 'editable'
| 'label'
| 'isLabelEnabled'
| 'name'
| 'onBlurCallback'
| 'onChangeCallback'
| 'onError'
| 'placeholder'
| 'required'
| 'value'
>;

/**
 * -----------------------------------------------------------------------------
 * This captures the Emirates ID number of an individual and hijacks the onChange
 * callback to the value before its passed back to the parent form.
 */
export function EmiratesIdInputField<T>({
  constraints,
  error,
  label,
  name,
  onError,
  placeholder,
  required = true,
  value,
  ...rest
}: IEmiratesIdInputFieldProps<T>) {
  return (
    <InputTextElement
      constraints={{
        format: 'emirates-id-number',
        maxLength: 18,
        minLength: 15,
        feedbackLabel: 'forms.validation.emiratesIdNumber',
        // regExp: /^784-?[0-9]{4}-?[0-9]{7}-?[0-9]{1}$/, // Extended versions
        regExp: /^784-?\d{4}-?\d{7}-?\d$/, // Simpler version
        required,
        ...(constraints || {}),
      }}
      error={error}
      inputDebounceDelay={0}
      keyboardType="numeric"
      label={label ?? 'forms.labels.emiratesIdNumber'}
      name={name}
      onError={onError}
      placeholder={placeholder ?? 'forms.placeholders.emiratesIdNumber'}
      returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
      value={value}
      {...rest}
    />
  );
}
