/* eslint-disable import/extensions */

import { useFonts } from 'expo-font';

/**
 * This hooks loads the custom font assets and makes them ready for use with the
 * app.
 *
 * NOTE: 1. This is a trial attempt at debugging as to why the google fonts are
 * not working with the `customFontsToLoad` util.
 */
export function useCustomFonts() {
  const [isMatterFontLoaded, matterFontLoadError] = useFonts({
    fontPrimaryBold: require('~/assets/fonts/matter/Matter-Bold.ttf'),
    fontPrimaryLight: require('~/assets/fonts/matter/Matter-Light.ttf'),
    fontPrimaryMedium: require('~/assets/fonts/matter/Matter-Medium.ttf'),
    fontPrimaryRegular: require('~/assets/fonts/matter/Matter-Regular.ttf'),
    fontPrimaryRegularItalic: require('~/assets/fonts/matter/Matter-RegularItalic.ttf'),
    fontPrimarySemiBold: require('~/assets/fonts/matter/Matter-SemiBold.ttf'),
  });

  const [isOrpheusProFontLoaded, orpheusProFontLoadError] = useFonts({
    fontSecondaryBold: require('~/assets/fonts/orpheus-pro/OrpheusPro-Bold.otf'),
    fontSecondaryItalic: require('~/assets/fonts/orpheus-pro/OrpheusPro-Italic.otf'),
    fontSecondaryMedium: require('~/assets/fonts/orpheus-pro/OrpheusPro-Medium.otf'),
    fontSecondaryRegular: require('~/assets/fonts/orpheus-pro/OrpheusPro-Regular.otf'),
  });

  const [isHarirFontLoaded, isHarirFontError] = useFonts({
    fontPrimaryArabic: require('~/assets/fonts/harir-display/HarirDisplay.otf'),
  });

  const areFontsLoaded = isMatterFontLoaded && isOrpheusProFontLoaded && isHarirFontLoaded;
  const fontLoadError = matterFontLoadError || orpheusProFontLoadError || isHarirFontError;

  return {
    areFontsLoaded,
    fontLoadError,
  };
}
