import { TextStyle, ViewStyle } from 'react-native';

import { fontFamily } from '~/theme/fonts';

const $phoneInputContainer: ViewStyle = {
  backgroundColor: 'rgba(250,250,250,1)',
  borderRadius: 12,
  height: 'auto',
  marginHorizontal: 0,
  marginStart: -8,
  marginEnd: 8,
  maxWidth: 80,
  paddingVertical: 8,
  // borderTopStartRadius: 42,
  // borderBottomStartRadius: 42,
  // borderWidth: 1,
  // borderEndWidth: 0,
  // borderColor: '#e5e5e5',
};

const $textInputContainer: ViewStyle = {
  display: 'none',
};

const $disabledPhoneInput: ViewStyle = {};

const $errorPhoneInput: ViewStyle = {
  borderColor: '#f87171',
};

const $textInput: TextStyle = {
  fontFamily: fontFamily.primary,
  fontSize: 14,
};

export default {
  $disabledPhoneInput,
  $errorPhoneInput,
  $phoneInputContainer,
  $textInputContainer,
  $textInput,
};
