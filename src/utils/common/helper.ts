/* eslint-disable function-paren-newline */
/* eslint-disable @typescript-eslint/comma-dangle */

import { FlagType, getAllCountries } from 'react-native-country-picker-modal';
/**
 * This converts pascal case to title case.
 */
export function pascalCaseToTitle(pascalCase: string): string {
  // Split the PascalCase string into words
  const words: string[] = pascalCase.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word and join them with spaces
  const titleCase: string = words
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return titleCase;
}

type TObject<T> = Record<string, T>;

/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

/**
 * -----------------------------------------------------------------------------
 * This shallow compares between two objects.
 *
 * @param obj1 The first object to compare
 * @param obj2 The second object to compare against
 *
 * @returns Boolean to check whether the objects match.
 */
export const shallowCompare = (obj1: TObject<unknown>, obj2: TObject<unknown>) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every((key) => obj1[key] === obj2[key]);

// utils/stringUtils.ts

/**
 * A utility function to get the initials from a full name.
 * @param fullName - The full name as a string.
 * @returns The initials in uppercase.
 */
export function getInitials(fullName: string): string {
  return fullName
    ?.split(' ') // Split the name into parts by spaces
    ?.map((name) => name.charAt(0)) // Get the first character of each part
    .join('') // Join them together
    .toUpperCase(); // Convert to uppercase
}

// utils/nameUtils.ts

/**
 * A utility function that splits a user's name into its first and last parts.
 * @param name - The full name as a string.
 * @returns An object containing the first and last names.
 */
export function splitName(name?: string) {
  const firstName = name?.split(' ')[0] || ''; // Default to an empty string if no name
  const lastName = name?.split(' ')[1] || ''; // Default to an empty string if no last name
  return { firstName, lastName };
}

/**
 * Function to extract country code and phone number
 * Utility function to extract country code and phone number from fullPhoneNumber
 */
export const extractPhoneNumberDetails = async (fullPhoneNumber: string) => {
  const formattedPhoneNumber = fullPhoneNumber.startsWith('+')
    ? fullPhoneNumber.substring(1)
    : fullPhoneNumber;

  let countryCodeISO = '';
  let callingCode = '';
  let phoneNumber = formattedPhoneNumber;

  // Retrieve all countries using the library
  const allCountries = await getAllCountries(FlagType.FLAT);

  // Loop through the possible country code lengths (1 to 4 digits)
  for (let i = 1; i <= 4; i += 1) {
    const possibleCode = formattedPhoneNumber.substring(0, i);

    // Find the country that matches the possible calling code
    const matchedCountry = allCountries.find((country) =>
      country.callingCode.includes(possibleCode)
    );

    if (matchedCountry) {
      // Set country ISO code and calling code
      countryCodeISO = matchedCountry.cca2; // e.g., 'AE'
      callingCode = possibleCode; // e.g., '971'
      phoneNumber = formattedPhoneNumber.substring(possibleCode.length); // Remaining phone number
      break;
    }
  }

  // Return the result in the required structure
  return { countryCode: countryCodeISO, callingCode, phoneNumber };
};
