import { IBaseInputDropdownElementProps } from '../form.types';
import { countryCodes } from '../form-constants';
import { InputDropdownElement } from '../form-elements';

/**
 * -----------------------------------------------------------------------------
 * This opens a modal for the user to select the country code for a specific
 * phone number to be inserted in the form.
 *
 * Note: To Do: Add the country flag besides the country code item.
 */
export function MobileCountryCodePickerInputField<T>({
  error,
  label,
  name,
  onChange,
  onError,
  value,
}: IBaseInputDropdownElementProps<T>) {
  return (
    <InputDropdownElement
      constraints={{
        feedbackLabel: 'forms.labels.theMobileCountryCode',
      }}
      enableSearch
      error={error}
      items={countryCodes}
      label={label || 'forms.labels.mobileCountryCode'}
      maxInputLength={20}
      name={name}
      onError={onError}
      onValueChange={onChange}
      searchOptions={{
        placeholder: 'forms.placeholders.searchForCountryCode',
      }}
      value={value}
    />
  );
}
