import { TextStyle, ViewStyle } from 'react-native';
import { colors } from '~/theme';

const $modalMessage: TextStyle = {
  color: colors.palette.neutral900,
  fontSize: 24,
  lineHeight: 40,
  marginTop: 20,
  textAlign: 'center',
  fontWeight: 700,
};
const $modalMessageDescription: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  textAlign: 'center',
  fontWeight: 400,
};
const $modalContentContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: 40,
  width: '100%',
};
const $doneBtnContainer: ViewStyle = { width: '100%', justifyContent: 'flex-end' };

export default {
  $modalContentContainer,
  $modalMessage,
  $modalMessageDescription,
  $doneBtnContainer,
};
