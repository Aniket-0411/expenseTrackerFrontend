import { ReactNode } from 'react';
import { StyleProp, TextProps as RNTextProperties, TextStyle } from 'react-native';
import { TextProps as RestyleTextProps } from '@shopify/restyle';

import { TxKeyPath, TTextLocalized, TranslateOptions } from '~/i18n';

import { ThemeType, TFontFamily } from '../types';

import { TextPresets } from './text.presets';

export type { TextStyle } from 'react-native';

export type TBaseTextProps = Omit<RestyleTextProps<ThemeType> & RNTextProperties, 'fontFamily'> & {
  /**
   * Children components, rendered as a last resort if `tx` or `text` are absent.
   */
  children?: ReactNode;
  /**
   * Text which is looked up via `i18n` for translation
   */
  tx?: TxKeyPath;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TranslateOptions;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string | number;
  /**
   * Text which provides different text for each locale e.g.
   * ```ts
   * { en: 'Hello', ar: 'مرحبا' }
   * ```
   */
  txLocalized?: TTextLocalized;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets;
  /**
   * Type safety around fontFamily according to object `fontFamily`
   */
  fontFamily?: TFontFamily;
};
