import { TxKeyPath } from '~/i18n';

import { TOnErrorFn } from '../form.types';
import { InputDropdownElement } from '../form-elements';
import { TCountryItem, TOnSelectCountryFn } from '../hooks/useCountriesList';

interface ICountryPickerInputFieldProps {
  error?: string;
  hasNetworkError?: string;
  handleOnFetchRetry?: () => void;
  isLoading?: boolean;
  items: TCountryItem[];
  label?: TxKeyPath;
  name: string;
  onChange: TOnSelectCountryFn;
  onError: TOnErrorFn;
  selectedCountry?: TCountryItem;
  value: string;
}

/**
 * -----------------------------------------------------------------------------
 * This opens a modal for the user to select  the country from a list.
 *
 * Note: To Do: Add the country flag besides the country.
 */
export function CountryPickerInputField({
  error,
  hasNetworkError,
  handleOnFetchRetry,
  isLoading,
  items,
  label,
  name,
  onChange,
  onError,
  selectedCountry,
  value,
}: ICountryPickerInputFieldProps) {
  return (
    <InputDropdownElement
      constraints={{
        feedbackLabel: 'forms.labels.theCountry',
      }}
      enableSearch
      error={error}
      handleOnFetchRetry={handleOnFetchRetry}
      hasNetworkError={hasNetworkError}
      isLoading={isLoading}
      items={items}
      label={label || 'forms.labels.country'}
      maxInputLength={20}
      name={name}
      onError={onError}
      // TODO: Fix type issues here.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onValueChange={onChange}
      searchOptions={{
        placeholder: 'forms.placeholders.searchForCountry',
      }}
      selectedItem={selectedCountry}
      value={value}
    />
  );
}
