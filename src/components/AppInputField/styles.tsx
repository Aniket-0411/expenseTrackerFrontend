import { TextStyle, ViewStyle } from 'react-native';

const $container: ViewStyle = {
  // marginVertical: 10,
};

const $label: TextStyle = {
  marginBottom: 5,
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
};

const $input: TextStyle = {
  fontFamily: 'Matter-Regular',
  fontSize: 16,
  paddingVertical: 14,
  paddingHorizontal: 4,
};

const $inputError: ViewStyle = {
  borderColor: '#f00',
};

const $error: TextStyle = {
  marginTop: 5,
  fontSize: 14,
  color: '#f00',
};

const $inputContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ccc',
  borderRadius: 50,
  paddingHorizontal: 20,
  paddingVertical: 4,
  backgroundColor: '#fff',
  alignContent: 'center',
};
const $disabledInput: ViewStyle = {
  backgroundColor: '#969696',
};
const $iconRight: ViewStyle = {
  position: 'absolute',
  right: 17,
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  $container,
  $disabledInput,
  $label,
  $input,
  $iconRight,
  $inputError,
  $error,
  $inputContainer,
};
