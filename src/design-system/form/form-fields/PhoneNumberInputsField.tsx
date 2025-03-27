import { Box } from '~/theme';

import { TOnDropdownChangeFn } from '../form.types';

import { MobileCountryCodePickerInputField } from './MobileCountryCodePickerInputField';
import { PhoneInputField } from './PhoneInputField';

interface IPhoneNumberInputsProps {
  countryCodeError?: string;
  countryCodeName: string;
  countryCodeOnChange: TOnDropdownChangeFn;
  countryCodeValue: string;
  onError(): void;
  phoneError?: string;
  phoneName: string;
  phoneOnBlur(): void;
  phoneOnChange(): void;
  phoneValue: string;
}

/**
 * -----------------------------------------------------------------------------
 * This is used to capture the country code and phone number of an individual
 * or, and tries to add organization within the form.
 */
export function PhoneNumberInputsField({
  countryCodeError,
  countryCodeName,
  countryCodeOnChange,
  countryCodeValue,
  onError,
  phoneError,
  phoneName,
  phoneOnBlur,
  phoneOnChange,
  phoneValue,
}: IPhoneNumberInputsProps) {
  let prefix = '';

  if (countryCodeValue) {
    const tempString = countryCodeValue.split(': ');
    // eslint-disable-next-line prefer-destructuring
    prefix = tempString[1];
  }

  return (
    <Box borderColor="tableBackground" borderRadius="xs" borderWidth={1} mb="l" p="s">
      <MobileCountryCodePickerInputField
        error={countryCodeError}
        name={countryCodeName}
        onChange={countryCodeOnChange}
        onError={onError}
        value={countryCodeValue}
      />

      <PhoneInputField
        error={phoneError}
        name={phoneName}
        onBlurCallback={phoneOnBlur}
        onChangeCallback={phoneOnChange}
        onError={onError}
        prefix={prefix}
        value={phoneValue}
      />
    </Box>
  );
}
