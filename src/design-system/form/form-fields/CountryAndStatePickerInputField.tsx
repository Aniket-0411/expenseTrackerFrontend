import { useEffect, useState } from 'react';

import { TxKeyPath } from '~/i18n';
import { Box } from '~/theme';

import { TOnErrorFn } from '../form.types';

import {
  TCountryItem,
  TCountryState,
  TCountryOnChangeFn,
  useCountriesList,
} from '../hooks/useCountriesList';

import { CountryPickerInputField } from './CountryPickerInputField';
import { StatePickerInputField } from './StatePickerInputField';

interface ICountryAndStatePickerInputFieldProps {
  countryError?: string;
  countryLabel?: TxKeyPath;
  countryName: string;
  countryOnChange: TCountryOnChangeFn;
  countryValue?: TCountryItem['value'];
  onError: TOnErrorFn;
  stateError: string;
  stateLabel: TxKeyPath;
  stateIsRequired?: boolean;
  stateName: string;
  stateOnChange: (value: string) => void;
  stateValue: string;
  countryStates?: TCountryState[];
}

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the country and state if that country supports states.
 */
export function CountryAndStatePickerInputField({
  countryError,
  countryLabel,
  countryName,
  countryOnChange,
  countryValue,
  onError,
  stateError,
  stateIsRequired = true,
  stateLabel,
  stateName,
  stateOnChange,
  stateValue,
  countryStates,
}: ICountryAndStatePickerInputFieldProps) {
  const { countriesData, countriesError, isLoadingCountries, refetchCountries } =
    useCountriesList();

  const [selectedCountry, setSelectedCountry] = useState<TCountryItem>();
  const [selectedCountryStates, setSelectedCountryStates] = useState<TCountryState[] | undefined>(
    countryStates
  );

  const hasStates = (setSelectedCountryStates?.length ?? 0) > 0;

  const handleCountrySelect = (label: string, item?: TCountryItem) => {
    const selectedStates = item?.value?.states;

    setSelectedCountry(() => item);
    stateOnChange('');
    setSelectedCountryStates(() => selectedStates);
    countryOnChange(label, selectedStates);
  };

  /**
   * If the app fails to load the options, provide an option to refetch the
   * countries data.
   */
  const fetchCountries = () => {
    refetchCountries();
  };

  useEffect(() => {
    if (countryValue && countriesData) {
      const updatedCountryObj = countriesData.find((item) => item?.value === countryValue);

      setSelectedCountryStates(() => updatedCountryObj?.value?.states);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countriesData]);

  useEffect(() => {
    setSelectedCountryStates(() => countryStates);

    if (countryStates && countryStates.length <= 0) {
      onError({ name: stateName, error: undefined });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryStates]);

  return (
    <Box
      borderColor="tableBackground"
      borderRadius="xs"
      borderWidth={hasStates ? 1 : 0}
      mb="m"
      padding={hasStates ? 's' : 'none'}
    >
      <CountryPickerInputField
        error={countryError}
        handleOnFetchRetry={fetchCountries}
        hasNetworkError={countriesError}
        isLoading={isLoadingCountries}
        items={countriesData}
        label={countryLabel}
        name={countryName}
        onChange={handleCountrySelect}
        onError={onError}
        selectedCountry={selectedCountry}
        value={countryValue?.name ?? ''}
      />

      {hasStates ? (
        <StatePickerInputField
          error={stateError}
          isRequired={stateIsRequired}
          items={selectedCountryStates || []}
          label={stateLabel}
          name={stateName}
          onChange={stateOnChange}
          onError={onError}
          value={stateValue}
        />
      ) : null}
    </Box>
  );
}
