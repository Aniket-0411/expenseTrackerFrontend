import { useState } from 'react';

import { IInputTextElement } from '../form.types';
import { InputDropdownElement } from '../form-elements';
import { useCountriesList, TCountryItem } from '../hooks/useCountriesList';

type TNationalityPickerInputFields<T> = Pick<
  IInputTextElement<T>,
  | 'editable'
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
 * This opens a modal for the user to select  the country from a list that is
 * used to then populate the nationality of that particular individual.
 *
 * TODO: Note Add the country flag besides the country.
 */
export function NationalityPickerInputField<T>({
  error,
  label,
  name,
  onChangeCallback,
  onError,
  value,
}: TNationalityPickerInputFields<T>) {
  const { countriesData, countriesError, isLoadingCountries, refetchCountries } =
    useCountriesList();

  const [selectedCountry, setSelectedCountry] = useState<TCountryItem>();

  const handleCountrySelect = (itemLabel: TCountryItem['label'], item?: TCountryItem) => {
    setSelectedCountry(() => item);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onChangeCallback({ name: itemLabel, value: itemLabel });
  };

  // const inputError = validateMobile({
  //   value: updatedText,
  //   constraints: constraints || {},
  // });

  // onError({ name, error: inputError });

  return (
    <InputDropdownElement
      constraints={{
        feedbackLabel: 'forms.labels.theNationality',
      }}
      enableSearch
      error={error}
      handleOnFetchRetry={refetchCountries}
      hasNetworkError={countriesError}
      isLoading={isLoadingCountries}
      items={countriesData}
      label={label ?? 'forms.labels.nationality'}
      maxInputLength={20}
      // TODO: @sowed will fix this in the next PR.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      name={name}
      onError={onError}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onValueChange={handleCountrySelect}
      searchOptions={{
        placeholder: 'forms.placeholders.searchForCountry',
      }}
      selectedItem={selectedCountry}
      value={value}
    />
  );
}
