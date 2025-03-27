import { useState, useEffect } from 'react';

import { TCountryCode } from '~/components';
import { extractPhoneNumberDetails } from '~/utils';

type UsePhoneDetailsProps = {
  /**
   * The phone number string used to fetch phone details.
   */
  phoneNumber: string;
};

/**
 * Custom hook to fetch phone details, including the country code,
 * and formatted phone number based on a provided phone number.
 *
 * @param {UsePhoneDetailsProps} - Object containing the phone number.
 * @returns {object} - Contains country code and formatted phone number.
 */
export function usePhoneDetails({ phoneNumber }: UsePhoneDetailsProps) {
  const [countryCode, setCountryCode] = useState<TCountryCode>('AE');
  const [callingCode, setCallingCode] = useState<string>('971');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState<string>(phoneNumber);

  /**
   * Fetches and sets phone details based on the provided phone number.
   */
  useEffect(() => {
    const fetchPhoneDetails = async () => {
      const {
        countryCode: fetchedCode,
        callingCode: fetchedCallingCode, // We won't use this
        phoneNumber: fetchedNumber,
      } = await extractPhoneNumberDetails(phoneNumber);

      setCountryCode(fetchedCode as TCountryCode);
      setCallingCode(fetchedCallingCode);

      // Remove the calling code from the formatted phone number
      if (fetchedNumber && fetchedNumber.startsWith(`+${fetchedCallingCode}`)) {
        setFormattedPhoneNumber(fetchedNumber.replace(`+${fetchedCallingCode}`, '').trim());
      } else {
        setFormattedPhoneNumber(fetchedNumber ?? '');
      }
    };

    fetchPhoneDetails();
  }, [phoneNumber]);

  return {
    /**
     * The country code for the phone number.
     */
    code: countryCode,
    /**
     * The calling code for the phone number.
     */
    callingCode,
    /**
     * The formatted phone number without the calling code.
     */
    phoneNumber: formattedPhoneNumber,
  };
}
