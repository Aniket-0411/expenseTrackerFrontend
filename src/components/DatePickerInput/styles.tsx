import { ViewStyle, TextStyle } from 'react-native';

import { colors } from '~/theme';

const $container: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: colors.palette.neutral900,
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 50,
  backgroundColor: colors.palette.neutral100,
};

const $input: TextStyle = {
  flex: 1,
  fontSize: 16,
  paddingVertical: 8,
  paddingHorizontal: 4,
  color: colors.palette.neutral400,
};

const $iconContainer: ViewStyle = {
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  $container,
  $input,
  $iconContainer,
};
