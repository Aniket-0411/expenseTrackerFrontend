import { TxKeyPath } from '~/i18n';

import { TOnErrorFn } from '../form.types';
import { InputDropdownElement } from '../form-elements';

interface IStatePickerInputFieldProps {
  error?: string;
  items: {
    label: string;
    value: string;
  }[];
  label?: TxKeyPath;
  name: string;
  onChange(value: string): void;
  onError: TOnErrorFn;
  isRequired: boolean;
  value: string;
}

/**
 * -----------------------------------------------------------------------------
 * This is opens a modal for the user to select  the `state` from a list.
 */
export function StatePickerInputField({
  error,
  items,
  label,
  name,
  onChange,
  onError,
  isRequired,
  value,
}: IStatePickerInputFieldProps) {
  return (
    <InputDropdownElement
      boxProps={{
        paddingBottom: 'xs',
      }}
      constraints={{
        feedbackLabel: 'forms.labels.theState',
      }}
      enableSearch
      error={error}
      items={items}
      label={label ?? 'forms.labels.state'}
      maxInputLength={20}
      name={name}
      onError={onError}
      onValueChange={onChange}
      required={isRequired}
      searchOptions={{
        placeholder: 'forms.placeholders.searchForState',
      }}
      value={value}
    />
  );
}
