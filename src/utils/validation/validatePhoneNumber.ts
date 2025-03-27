import { PhoneNumberUtil } from 'google-libphonenumber';

import { IConstraints } from '../types';

interface IValidatePhoneNumber {
  value: string;
  regionCode: IConstraints['regionCode'];
}

export function validatePhoneNumber({ value, regionCode }: IValidatePhoneNumber) {
  const phoneUtil = PhoneNumberUtil.getInstance();

  try {
    return phoneUtil.isValidNumberForRegion(
      /**
       * Since we have decided to enforce adding country code to the phone numbers,
       * removing the leading zero on phone numbers to make it pass.
       * eg. `0561111111` -> `561111111` later === `+971561111111`.
       */
      phoneUtil.parse(value.replace(/^0+/, ''), regionCode),
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      regionCode
    );
  } catch (error: unknown) {
    const err = error as Error;

    if (err.message) return err.message;

    return 'Please enter a valid number!!';
  }
}
