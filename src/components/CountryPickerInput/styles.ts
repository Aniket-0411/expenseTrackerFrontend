import { TextStyle, ViewStyle } from 'react-native';

import { fontFamily } from '~/theme/fonts';

const $container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const $phoneInputContainer: ViewStyle = {
  width: '100%',
  borderTopStartRadius: 42,
  borderBottomStartRadius: 42,
  paddingVertical: 10,
  paddingHorizontal: 38,
  borderWidth: 1,
  borderEndWidth: 0,
  borderColor: '#e5e5e5',
  backgroundColor: 'rgba(250,250,250,1)',
};

const $textInputContainer: ViewStyle = {
  borderRadius: 5,
  display: 'none',
};

const $disabledPhoneInput: ViewStyle = {
  backgroundColor: '#f5f5f5',
};
const $errorPhoneInput: ViewStyle = {
  marginBottom: 24,
  borderWidth: 1,
  borderColor: '#f87171',
};

const $textInput: TextStyle = {
  fontFamily: fontFamily.primary,
  fontSize: 14,
  paddingVertical: 1.5,
};

export default {
  $container,
  $disabledPhoneInput,
  $errorPhoneInput,
  $phoneInputContainer,
  $textInputContainer,
  $textInput,
};
