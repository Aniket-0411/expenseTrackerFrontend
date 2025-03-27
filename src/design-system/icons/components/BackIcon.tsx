import { GestureResponderEvent, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { isIOS } from '~/utils';
import { useLanguageContext } from '~/i18n';
import { Box, BoxPropsType } from '~/theme';

import { ChevronIcon, ArrowIcon, IIconProps } from '../svg-icons';

interface IBackIconProps extends BoxPropsType {
  onPress?: (event: GestureResponderEvent) => void;
  iconProps?: IIconProps;
}

/**
 * -----------------------------------------------------------------------------
 * Navigates the User back to the previous route on clicking it.
 */
export function BackIcon({ onPress, iconProps, ...rest }: IBackIconProps) {
  const router = useRouter();
  const { isRTL } = useLanguageContext();

  const handleBackButtonPress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    } else {
      router.back();
    }
  };

  const Icon = isIOS ? ChevronIcon : ArrowIcon;

  return (
    <Pressable onPress={handleBackButtonPress}>
      <Box {...rest}>
        <Icon {...iconProps} style={isRTL ? { transform: [{ rotate: '180deg' }] } : {}} />
      </Box>
    </Pressable>
  );
}
