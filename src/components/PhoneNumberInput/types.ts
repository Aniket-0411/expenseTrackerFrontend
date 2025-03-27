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

export interface IPhoneNumberInput {
  defaultValue?: string;
  defaultCode?: TCountryCode;
  hasError?: boolean;
  isEditable?: boolean;
  // value: TCountry | null;
  value: TCallingCodeValue | null;
  onChangeFormattedText?: (text: string) => void;
  onChangeCountry?: (country: TCallingCodeValue) => void;
  onChangeText?: (text: string) => void;
}
