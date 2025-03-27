import tinycolor from 'tinycolor2';

/**
 * This function takes a color value in the form of `#FFF` as input and
 * returns an RGBA array `[r, g, b, a]`. It first removes the `#` symbol if present,
 * then checks if the input is in shorthand notation (e.g., `#FFF`).
 * - If so, it expands it to the full notation (e.g., #FFFFFF).
 *
 * - Finally, it splits the hex string into pairs of characters, converts them to
 * decimal values, and returns the `RGBA` array.
 *
 * You can use this `hexToRGBA` function to convert your color values from `#FFF`
 * format to the `RGBA` format `[255, 255, 255, 1]` before applying them as colors
 * in your `Lottie` animation.

 * @param hex - The string value of the `hex` color.
 * @returns
 */
export function hexToRGBA(hex: string) {
  const normalizedHex = hex.replace('#', '');

  if (normalizedHex.length === 3) {
    // Convert shorthand hex notation to full hex notation (e.g., #FFF to #FFFFFF)
    const [r, g, b] = normalizedHex.split('').map((char) => parseInt(char + char, 16));
    return [r, g, b, 1];
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [r, g, b] = normalizedHex.match(/.{2}/g).map((char) => parseInt(char, 16));

  return [r, g, b, 1];
}

/**
 * Modifies the `colors` in a Lottie animation JSON based on the provided
 * colorByPath mappings.
 *
 * @param json - The `Lottie` animation JSON object to be colorized.
 * @param colorByPath - An object containing the color mappings for specific
 * paths in the Lottie JSON.
 *
 * The `key`s are the paths, and the values are the color values to apply.
 *
 * - https://github.com/lottie-react-native/lottie-react-native/issues/671#issuecomment-823157024
 * - Path context can be computed using this tool: https://github.com/Noitidart/Colorize-Lottie
 *
 * @returns The modified Lottie animation JSON object with colors applied.
 */
export function colorizeLottie(json: object, colorByPath: Record<string, string>): object {
  const nextJson: object = JSON.parse(JSON.stringify(json));

  Object.entries(colorByPath).forEach(([path, color]) => {
    if (!color) return;
    const rgbPercentages = tinycolor(color).toPercentageRgb();
    const rFraction = parseInt(rgbPercentages.r, 10) / 100;
    const gFraction = parseInt(rgbPercentages.g, 10) / 100;
    const bFraction = parseInt(rgbPercentages.b, 10) / 100;

    const pathParts: string[] = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentObj: any = nextJson;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < pathParts.length - 1; i++) {
      const pathPart: string = pathParts[i];
      if (!(pathPart in currentObj)) {
        currentObj[pathPart] = {};
      }
      currentObj = currentObj[pathPart];
    }

    const lastPathPart: string = pathParts[pathParts.length - 1];
    currentObj[lastPathPart] = [rFraction, gFraction, bFraction];
  });

  return nextJson;
}
