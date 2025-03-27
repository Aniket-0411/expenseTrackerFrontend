import { TxKeyPath } from '~/i18n';
import { useMoveInStore } from '~/services';

import { IInputTextElement } from '../form.types';
import { InputTextElement } from '../form-elements';

type IVISANumberInputFieldProps<T> = Pick<
IInputTextElement<T>,
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
>;

/**
 * -----------------------------------------------------------------------------
 * This captures the EJARI number of an individual.
 */
export function EjariDocumentNumberInputField<T>({
  constraints,
  error,
  label,
  name,
  onError,
  placeholder,
  required = false,
  value,
  ...rest
}: IVISANumberInputFieldProps<T>) {
  const { projectLocation } = useMoveInStore();

  const defaultInputLabel: TxKeyPath =
    projectLocation === 'Dubai' ? 'forms.labels.ejariDocNumber' : 'forms.labels.tawteeqDocNumber';

  const defaultInputPlaceholder: TxKeyPath =
    projectLocation === 'Dubai'
      ? 'forms.placeholders.ejariDocNumber'
      : 'forms.placeholders.tawteeqDocNumber';

  return (
    <InputTextElement
      autoCapitalize="characters"
      constraints={{
        feedbackLabel:
          projectLocation === 'Dubai'
            ? 'forms.validation.theEjariDocNumber'
            : 'forms.validation.theTawteeqDocNumber',
        format: 'identification-no',
        maxLength: 16,
        minLength: 6,
        required,
        type: 'number',
        ...(constraints || {}),
      }}
      error={error}
      label={label ?? defaultInputLabel}
      name={name}
      onError={onError}
      placeholder={placeholder ?? defaultInputPlaceholder}
      value={value}
      {...rest}
    />
  );
}
