import { translate } from '~/i18n';

export type TCountryState = {
  label: string;
  value: string;
};

/**
 * This is the type retrieved from the API, to be transformed into the list
 * consumable type, `TCountryItem`.
 *
 */
export type TCountryDataItem = {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  countryCode: string;
  states?: TCountryState[];
};

/**
 * Data type friendly to the Picker modal component.
 */
export type TCountryItem = {
  label: string;
  value?: TCountryDataItem;
};

export type TOnSelectCountryFn = (label: string, item?: TCountryItem) => void;

export type TCountryOnChangeFn = (label: string, items?: TCountryState[]) => void;

/**
 * Fetches a list of countries from a API
 */
export const useCountriesList = () => {
  // TODO: Implement useCountriesList hook

  // Temp test Data
  const data: TCountryItem[] = [
    {
      label: 'United Arab Emirates',
      value: {
        name: 'United Arab Emirates',
        alpha2Code: 'AE',
        alpha3Code: 'UAE',
        countryCode: '+971',
      },
    },
  ];

  return {
    countriesData: data,
    countriesError: translate('forms.errors.failedToGetLocations'),
    isLoadingCountries: false,
    refetchCountries: () => null,
  };
};
