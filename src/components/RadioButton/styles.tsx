import { ViewStyle } from 'react-native';
import { colors } from '~/theme';
import { widthPercentageToDP } from '~/utils';

const $radioContainer: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  gap: widthPercentageToDP('2%'),
  justifyContent: 'flex-start',
  // paddingHorizontal: 10,
  width: '100%',
};

const $radioCircle: ViewStyle = {
  borderRadius: 50,
  borderWidth: 0.5,
  borderColor: colors.palette.neutral900,
  backgroundColor: colors.palette.neutral100,
  alignItems: 'center',
  justifyContent: 'center',
};

const $radioSmallCircle: ViewStyle = {
  height: 23,
  width: 23,
};

const $radioLargeCircle: ViewStyle = {
  height: 30,
  width: 30,
};

const $selectedRb: ViewStyle = {
  borderRadius: 50,
  backgroundColor: colors.palette.secondary,
};

const $selectedRbDisabled: ViewStyle = {
  backgroundColor: '#969696',
};

const $selectedSmallRb: ViewStyle = {
  width: 15,
  height: 15,
};

const $selectedLargeRb: ViewStyle = {
  width: 18,
  height: 18,
};

// const $radioText: TextStyle = {
//   fontSize: widthPercentageToDP('4.5%'),
//   fontWeight: '500',
// };

export default {
  $radioContainer,
  $radioCircle,
  $radioSmallCircle,
  $radioLargeCircle,
  $selectedRb,
  $selectedSmallRb,
  $selectedRbDisabled,
  $selectedLargeRb,
  // $radioText,
};
