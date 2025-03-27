import { createText } from '@shopify/restyle';
import { Component } from 'react';
import Animated from 'react-native-reanimated';

import { translate, useLanguageContext } from '~/i18n';

import { ThemeType } from '../theme';
import { fontFamily as fontOptions } from '../types';

import { TBaseTextProps } from './text.props';

/**
 * Create Primitives to Replace the RN Text Components.
 * Allow you to add type safe style props to the text element.
 */
const ThemedText = createText<ThemeType, TBaseTextProps>();
/**
 * Adjust font scaling on Text and TextInput elements to a maximum of 1, so that
 * the user can scale them down but not up.
 */
ThemedText.defaultProps = ThemedText.defaultProps || {};

ThemedText.defaultProps.maxFontSizeMultiplier = 1;

/**
 * -----------------------------------------------------------------------------
 * Provides a themed and translation ready HOC `Text` component.
 * Can render the text through any of the following props options.
 *
 * - `tx` - Text which is looked up via `i18n` for translation.
 * - `text` - The text to display if not using `tx` or nested components.
 * - `children` - Children components, rendered as a last resort if `tx` or
 * `text` are absent.
 */
export function Text({
  tx,
  txOptions,
  txLocalized,
  text,
  children,
  fontFamily = 'primary',
  variant = 'body',
  style,
  ...rest
}: TBaseTextProps) {
  const { currentLanguage, isRTL } = useLanguageContext();

  const textFontFamily = fontOptions[fontFamily];

  /**
   * Renders the translated text is passed via `tx`, or the text i
   */
  const i18nText = tx && translate(tx, txOptions);
  let content = i18nText ?? text ?? children;

  /**
   * If localized text is provided, we have to pick out the active language
   */
  if (txLocalized) {
    if (typeof txLocalized === 'string') {
      content = txLocalized;
    } else {
      /**
       * This extracts the key of the text from the oject based on the currently
       * supported active locale's language type..
       */
      content = txLocalized[currentLanguage];
    }
  }

  return (
    <ThemedText
      {...rest}
      fontFamily={textFontFamily}
      style={style}
      variant={variant}
      writingDirection={isRTL ? 'rtl' : 'auto'}
    >
      {content}
    </ThemedText>
  );
}

/**
 * Note, adding a class component Text here is a workaround for `createAnimatedComponent`
 * which does not allow for functional components.
 */

// eslint-disable-next-line react/prefer-stateless-function
class AnimatedTextClass extends Component {
  render() {
    return <Text {...this.props} />;
  }
}

/**
 * This creates an animated version of the `Text` component, wrapped with
 * Reanimated properties.
 */
export const AnimatedText = Animated.createAnimatedComponent(AnimatedTextClass);
