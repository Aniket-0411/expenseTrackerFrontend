/**
 * Takes a complete phone number (with country code), splits it, removing the
 * country code and returns the phoneNumber without the country code.
 *
 * This is used when we retrieve the users phone number from the api. Our phone
 * number field already has a country code section and to avoid duplication we
 * use this function to remove the country code from the incoming number.
 *
 * TODO: This function does not return anything. It should return the phone
 *  number without the country code.
 *
 * @param phoneNumber
 */
export function getPhoneNumberWithoutCountryCode(phoneNumber: string) {
  const supportedCountryCodes = ['+971', '+966', '+964'];

  supportedCountryCodes.forEach((countryCode) => {
    if (phoneNumber.startsWith(countryCode)) {
      const strArray = phoneNumber.split(countryCode);

      return strArray[1];
    }

    return phoneNumber;
  });
}
