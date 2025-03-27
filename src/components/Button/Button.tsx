/* eslint-disable no-nested-ternary */

import { TouchableOpacity, ViewStyle } from 'react-native';

import { TxKeyPath, TTxOptions } from '~/i18n';

import { Text, Box } from '~/theme';

import styles from './styles';

export interface IButtonProps {
  actionIcon?: JSX.Element;
  isDisabled?: boolean;
  onPress?: () => void;
  title?: string;
  tx?: TxKeyPath;
  style?: ViewStyle;
  txOptions?: TTxOptions;
  variant?: 'primary' | 'outline' | 'outline-white';
}

/**
 * -----------------------------------------------------------------------------
 * Renders a button with a title and an optional onPress handler.
 */
export function Button({
  actionIcon,
  isDisabled = false,
  onPress,
  style,
  title,
  tx,
  txOptions,
  variant = 'primary',
}: IButtonProps) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={isDisabled ? undefined : onPress}
      style={[
        styles.$button,

        variant === 'primary'
          ? styles.$primaryButton
          : variant === 'outline'
            ? styles.$outlineButton
            : styles.$outlineWhiteButton,
        isDisabled ? styles.$disabledButton : null,
        style,
      ]}
    >
      <Box style={styles.$buttonContainer}>
        {actionIcon}
        <Text
          fontFamily="primary"
          style={[
            styles.$buttonText,
            variant === 'primary'
              ? styles.$primaryButtonText
              : variant === 'outline'
                ? styles.$outlineButtonText
                : styles.$outlineWhiteButtonText,
          ]}
          text={title}
          tx={tx}
          txOptions={txOptions}
        />
      </Box>
    </TouchableOpacity>
  );
}
