import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { TxKeyPath, TLocalizedText } from '~/i18n';
import { BoxPropsType, TBaseTextProps } from '~/theme';

import { TButtonPresetNames } from './button.presets';

export interface ButtonProps extends BoxPropsType {
  /**
   * Allows for a custom icon to be displayed on the right side of the button.
   */
  actionIconEnd?: ReactNode;
  /**
   * Allows for a custom icon to be displayed on the left side of the button.
   */
  actionIconStart?: ReactNode;
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;
  /**
   * Label shown when the button is loading.
   */
  txLoading?: TxKeyPath;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * Text which provides different text for each locale e.g.
   * ```ts
   * { en: 'Hello', ar: 'مرحبا' }
   * ```
   */
  txLocalized?: TLocalizedText;

  /**
   * replace placeholder with indicator and disable the button.
   */
  isLoading?: boolean;

  /**
   * replace placeholder with indicator and disable the button.
   */
  isDisabled?: boolean;

  /**
   * An optional style override useful for padding & margin.
   */
  boxStyle?: BoxPropsType;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TBaseTextProps;

  /**
   * One of the different types of text presets.
   */
  preset?: TButtonPresetNames;

  /**
   * One of the different types of text presets.
   */
  children?: ReactNode;
  /**
   * One callback to be passed to the touchable opacity element
   */
  onPress?: TouchableOpacityProps['onPress'];
  /**
   * The test ID of the item
   */
  testID?: TouchableOpacityProps['testID'];
}
