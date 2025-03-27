import {
  CountryCode as TCountryCode,
  CallingCode as TCallingCode,
  Country as TCountry,
} from 'react-native-country-picker-modal';

export type { TCountryCode, TCallingCode, TCountry };

export type TCallingCodeValue = {
  code: TCountryCode;
  callingCode: TCallingCode;
};

export interface ICountryPickerInput {
  defaultCode: TCallingCodeValue; // The default country code to display
  onChangeCountry?: (country: TCallingCodeValue) => void; // Callback for country change
  isEditable?: boolean; // Flag to control editability
  hasError?: boolean;
}
