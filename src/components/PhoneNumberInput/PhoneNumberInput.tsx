/* eslint-disable react-native/no-inline-styles */

import { useEffect, useRef } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { Country } from 'react-native-country-picker-modal';

import { Box, fontFamily } from '~/theme';

import styles from './styles';
import { IPhoneNumberInput, TCallingCodeValue, TCountryCode } from './types';

/**
 * -----------------------------------------------------------------------------
 * Renders all the input fields for the phone number, with the country code
 * and the phone number validation.
 * @deprecated - This will later be replaced with a tweaked `CountryPickerInputFieldV2`.
 */
export function PhoneNumberInput({
  // defaultValue,
  // defaultCode,
  onChangeFormattedText,
  onChangeCountry,
  onChangeText,
  isEditable = true,
  hasError = false,
  value,
}: IPhoneNumberInput) {
  const phoneInputRef = useRef<PhoneInput>(null);
  // const [phoneNumber, setPhoneNumber] = useState();

  const handleCountryChange = (country: Country) => {
    const formattedCallingCode: TCallingCodeValue = {
      code: country.cca2,
      callingCode: country.callingCode[0],
    };
    if (onChangeCountry) {
      onChangeCountry(formattedCallingCode);
    }
  };

  useEffect(() => {
    phoneInputRef?.current?.setState({
      countryCode: value?.code as TCountryCode,
      code: value?.callingCode,
    });
  }, [value]);

  return (
    <Box alignItems="center" justifyContent="center">
      {/* TODO: Revisit this type issue later with @juned */}
      {/* TODO: @Sowed, WIP to fix these styling issues. */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <PhoneInput
        // layout="first"
        ref={phoneInputRef}
        codeTextStyle={styles.$textInput}
        containerStyle={[
          styles.$phoneInputContainer,
          isEditable ? null : styles.$disabledPhoneInput,
          !hasError ? null : styles.$errorPhoneInput,
          // { backgroundColor: 'blue' },
        ]}
        countryPickerButtonStyle={{
          // backgroundColor: '#f0f000',
          maxWidth: 80,
        }}
        countryPickerProps={{
          flatListProps: {
            paddingHorizontal: 8,
          },
          withAlphaFilter: true,
          theme: {
            primaryColor: '#ccc',
            primaryColorVariant: '#eee',
            backgroundColor: '#ffffff',
            onBackgroundTextColor: '#000000',
            fontSize: 14,
            fontFamily: fontFamily.primary,
            filterPlaceholderTextColor: '#aaa',
            activeOpacity: 0.7,
            itemHeight: 52,
            paddingHorizontal: 16,
          },
          // containerButtonStyle: {
          //   borderWidth: 5,
          //   borderColor: '#FF8800',
          // },
          // filterProps: {
          //   borderWidth: 5,
          //   borderColor: '#FF8800',
          // },
        }}
        disabled={!isEditable}
        layout="second"
        onChangeCountry={handleCountryChange}
        onChangeFormattedText={onChangeFormattedText}
        onChangeText={onChangeText}
        textContainerStyle={styles.$textInputContainer}
        value={value as unknown as string}
      />
    </Box>
  );
}
