import {
  CountryCode as TCountryCode,
  CallingCode as TCallingCode,
  Country as TCountry,
} from 'react-native-country-picker-modal';

export type { TCountryCode, TCallingCode, TCountry };

export interface IPhoneNumberInput {
  defaultValue?: string;
  defaultCode?: TCountryCode;
  hasError?: boolean;
  isEditable?: boolean;
  value: TCountry | null;
  onChangeFormattedText?: (text: string) => void;
  onChangeCountry?: (country: TCountry) => void;
  onChangeText?: (text: string) => void;
}
