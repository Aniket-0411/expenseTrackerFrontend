import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { colors } from '~/theme';

const $dropdown: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: colors.palette.neutral900,
  paddingVertical: 20,
  paddingHorizontal: 20,
  borderRadius: 50,
  backgroundColor: colors.palette.neutral100,
};

const $item: ViewStyle = {
  padding: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const $textItem: TextStyle = {
  flex: 1,
  fontSize: 16,
};

const $placeholderStyle: TextStyle = {
  fontSize: 16,
};

const $selectedTextStyle: TextStyle = {
  fontSize: 16,
};

const $iconStyle: ImageStyle = {
  width: 24,
  height: 24,
};

const $placeholderDisabled: TextStyle = {
  color: colors.palette.neutral500,
};

const $dropdownDisabled: ViewStyle = {
  borderColor: colors.palette.neutral500,
};

export default {
  $dropdown,
  $item,
  $iconStyle,
  $textItem,
  $placeholderStyle,
  $selectedTextStyle,
  $placeholderDisabled,
  $dropdownDisabled,
};
