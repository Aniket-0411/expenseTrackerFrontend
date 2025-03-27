// @flow
// Inspired by: https://github.com/davidchambers/Base64.js/blob/master/base64.js
// https://stackoverflow.com/a/42833475/3758602

/**
 * This outlines the list of supported characters for base64 encoding.
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

/**
 * This is the base64 encoding and decoding utility. This is to provide a drop
 * in replacement to the `atob` and `btoa` functions that are not supported by
 * react native especially in chrome debugging mode.
 *
 * - https://github.com/davidchambers/Base64.js/blob/master/base64.js
 * - https://stackoverflow.com/a/42833475/3758602
 */
export const Base64 = {
  btoa: (input = '') => {
    const str = input;
    let output = '';

    for (
      let block = 0, charCode, i = 0, map = chars;
      // eslint-disable-next-line no-bitwise, no-cond-assign
      str.charAt(i | 0) || ((map = '='), i % 1);
      // eslint-disable-next-line no-bitwise
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
        );
      }

      // eslint-disable-next-line no-bitwise
      block = (block << 8) | charCode;
    }

    return output;
  },

  /**
   * This replaces the node `atob` function. It is used to decode the base64.
   */
  atob: (input = '') => {
    const str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      // eslint-disable-next-line no-cond-assign, no-plusplus
      (buffer = str.charAt(i++));
      // eslint-disable-next-line no-bitwise, no-cond-assign, no-plusplus
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? // eslint-disable-next-line no-bitwise
          (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};
