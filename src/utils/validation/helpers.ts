import { IConstraints } from '../types';

/**
 * This utility checks whether the input string has an emoji or not.
 *
 * @param str The string to check for emojis.
 * @returns boolean - `true` for emoji & `false` otherwise.
 */
export const isEmoji = (str: string) => {
  const ranges = [
    '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])', // U+1F680 to U+1F6FF
  ];

  if (str.match(ranges.join('|'))) {
    return true;
  }

  return false;
};

/**
 * Regular that check it there is more than one space character.
 */
const removeDoubleSpaceRegEx = /\s{2,}/g;

/**
 * Cleans up double space characters within the string.
 */
export const cleanupDoubleSpace = (text: string) => text.replace(removeDoubleSpaceRegEx, ' ');

export const supportedCharactersRegEx = /^[0-9a-zA-Z-_@&#|.,"': ]+$/;
export const noneSupportedCharactersRegEx = /[^0-9a-zA-Z-_@&#|.,"': ]/g;

export const supportedCharactersRegExTitles = /^[a-zA-Z0-9- .#@&,_'":.?! ]+$/;
export const noneSupportedCharactersRegExTitles = /[^a-zA-Z0-9- .#@&,_'":.?! ]/g;
export const noneSupportedCharactersRegExTitlesForMobilePhones = /[^0-9-]/g;

const supportsArabic = /^[a-zA-Z\u0600-\u06FF\s'-.]+$/;

interface IValidateInputCharacters {
  text: string;
  format?: IConstraints['format'];
  regExp?: IConstraints['regExp'];
}

/**
 * This receives an input sting, and formatting constraints and regular expression
 * to be used in sanitizing the input.
 *
 * For example to `format==='title'` will test if the input is a valid title.
 *
 * @param IValidateInputCharacters
 * @returns string updatedText
 */
export const validateAndCleanInputText = ({ text, format, regExp }: IValidateInputCharacters) => {
  let updatedText = cleanupDoubleSpace(text);

  let isValidInput = true;

  if (format === 'password') return text;

  if (format === 'phone-number') {
    if (text) {
      updatedText = text.replace(noneSupportedCharactersRegExTitlesForMobilePhones, '');
    } else {
      updatedText = text.replace(/^0+/, '');
    }
  } else if (format === 'person-fullname' || format === 'title') {
    if (regExp) {
      isValidInput = regExp.test(updatedText);
    } else if (supportsArabic) {
      isValidInput = supportsArabic.test(updatedText);
    } else if (format === 'title') {
      isValidInput = supportedCharactersRegExTitles.test(updatedText);
    }
  } else if (format === 'numbers-only') {
    // Remove all non-numeric characters
    updatedText = updatedText.replace(/[^0-9]/g, '');
  } else if (format === 'person-name') {
    updatedText = updatedText.replace(/[^A-Za-z\s]+/g, '');
  } else {
    isValidInput = supportedCharactersRegEx.test(updatedText);
  }

  const hasEmojis = isEmoji(updatedText);

  if ((!isValidInput || hasEmojis) && !regExp) {
    if (format === 'title') {
      updatedText = text.replace(noneSupportedCharactersRegExTitles, '');
    } else {
      updatedText = text.replace(noneSupportedCharactersRegEx, '');
    }
  }

  // TODO: Still reasoning about this call.
  if (hasEmojis) {
    return text;
  }

  return updatedText;
};

/**
 * This checks whether the input value is an emirates id and tries to reformat
 * it in the correct format of `784-XXXX-XXXXXXX-X`.
 */
export const checkAndFormatEmiratesIdInput = (newText = '') => {
  let updatedText = newText;

  // Ensure value starts with "784-"
  if (!newText.startsWith('784-')) {
    // updatedText = cleanupDoubleSpace(newText);
    // TODO: Add `784-` to the beginning of the number.
    updatedText = `784-${newText}`;
  }

  // Ensure 9th character is a dash
  if (updatedText.length >= 9 && updatedText[8] !== '-') {
    updatedText = `${newText.slice(0, 8)}-${newText.slice(8)}`;
  }

  // Ensure 9th character is a dash
  if (updatedText.length >= 17 && updatedText[16] !== '-') {
    updatedText = `${newText.slice(0, 16)}-${newText.slice(16)}`;
  }

  return updatedText;
};
