import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { colors } from '~/theme';

const $button: ViewStyle = {
  borderRadius: 36,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 12,
};

const $primaryButton: ViewStyle = {
  backgroundColor: colors.palette.secondary,
};

const $outlineButton: ViewStyle = {
  borderWidth: 1,
};
const $outlineWhiteButton: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.palette.neutral100,
};

const $disabledButton: ViewStyle = {
  backgroundColor: colors.palette.neutral500,
};

const $buttonText: TextStyle = {
  fontSize: 14,
};

const $primaryButtonText: TextStyle = {
  color: colors.palette.neutral100,
};

const $outlineButtonText: TextStyle = {
  color: colors.palette.neutral900,
};
const $outlineWhiteButtonText: TextStyle = {
  color: colors.palette.neutral100,
};

const $buttonContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
};

export default StyleSheet.create({
  $button,
  $buttonContainer,
  $buttonText,
  $disabledButton,
  $outlineButton,
  $outlineButtonText,
  $outlineWhiteButton,
  $outlineWhiteButtonText,
  $primaryButton,
  $primaryButtonText,
});
