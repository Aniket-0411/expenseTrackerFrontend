import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';

import { Text } from '~/theme';

import { ICountryPickerInput, TCallingCodeValue } from './types';
import styles from './styles';

/**
 * -----------------------------------------------------------------------------
 * Renders a country picker for selecting the country and its calling code.
 */
export function CountryPickerInput({
  defaultCode,
  onChangeCountry,
  isEditable = true,
  hasError,
}: ICountryPickerInput) {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [countryPickerValue, setCountryPickerValue] = useState<TCallingCodeValue | null>({
    code: 'AE',
    callingCode: '971',
  });

  const handleOpenCountryPicker = () => {
    setIsPickerOpen(true);
  };

  const handleCloseCountryPicker = () => {
    setIsPickerOpen(false);
  };

  const handleCountryChange = (country: Country) => {
    const formattedCallingCode: TCallingCodeValue = {
      code: country.cca2,
      callingCode: country.callingCode[0],
    };
    setCountryPickerValue(formattedCallingCode);
    if (onChangeCountry) {
      onChangeCountry(formattedCallingCode);
    }
    handleCloseCountryPicker();
  };

  return (
    <View style={styles.$container}>
      <TouchableOpacity
        // disabled={isEditable}
        onPress={handleOpenCountryPicker}
        style={styles.$container}
      >
        <CountryPicker
          countryCode={defaultCode.code}
          onClose={handleCloseCountryPicker}
          onSelect={handleCountryChange}
          renderFlagButton={() => (
            <View
              style={[
                styles.$phoneInputContainer,
                isEditable ? null : styles.$disabledPhoneInput,
                !hasError ? null : styles.$errorPhoneInput,
              ]}
            >
              <Text text={countryPickerValue?.callingCode} />
            </View>
          )}
          visible={isPickerOpen}
          withAlphaFilter
          withFilter
          withFlag
        />
      </TouchableOpacity>
    </View>
  );
}
