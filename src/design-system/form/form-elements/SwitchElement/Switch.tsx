import { Switch as NativeSwitch, SwitchProps } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';

// import { isAndroid } from '~/utils';
import { Box, BoxPropsType, useThemeColors } from '~/theme';

interface ISwitchProps extends SwitchProps {
  boxStyles?: BoxPropsType;
  isEnabled: boolean;
  onValueChange: (value: boolean) => void;
  value: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This is wrapper around the underlying `Switch` component that provides themed
 * styles and accessibility.
 *
 * NOTE: To add screen reader and accessibility support.
 */
export function Switch({ boxStyles, isEnabled, onValueChange, value, ...rest }: ISwitchProps) {
  const { switchThumb, switchThumbInactive, switchTrack, switchTrackInactive } = useThemeColors();

  /**
   * Transform the X and Y size of the native switch element
   */
  // const scaleStyles = [
  //   { scaleX: moderateScale(1, 1.5) },
  //   { scaleY: moderateScale(1, 1.5) },
  // ];

  return (
    <Box {...boxStyles}>
      <NativeSwitch
        ios_backgroundColor={isEnabled ? switchTrack : switchTrackInactive}
        onValueChange={onValueChange}
        // style={isAndroid ? { transform: scaleStyles } : {}}
        thumbColor={isEnabled ? switchThumb : switchThumbInactive}
        trackColor={{ true: switchTrack, false: switchTrackInactive }}
        value={value}
        {...rest}
      />
    </Box>
  );
}
