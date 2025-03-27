import { Circle, RadialGradient, Stop, Svg } from 'react-native-svg';

import { Box, BoxPropsType, useThemeColors } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * Renders the SVG gradient background for the first-install screen
 * with a blur effect.
 */
export function OnboardingGradientSVG({ ...props }: BoxPropsType) {
  const { logoForeground } = useThemeColors();
  return (
    <Box {...props}>
      <Svg
        height="100%"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
        }}
        width="100%"
      >
        <Circle cx="50%" cy="50%" fill="url(#grad)" opacity={0.2} r="50%" />

        <RadialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="grad" r="50%">
          <Stop
            offset="0%"
            stopColor={logoForeground}
            stopOpacity="1"
          />

          <Stop
            offset="15%"
            stopColor={logoForeground}
            stopOpacity="0.8"
          />

          <Stop
            offset="30%"
            stopColor={logoForeground}
            stopOpacity="0.6"
          />

          <Stop
            offset="75%"
            stopColor={logoForeground}
            stopOpacity="0.4"
          />

          <Stop
            offset="100%"
            stopColor={logoForeground}
            stopOpacity="0"
          />
        </RadialGradient>
      </Svg>
    </Box>
  );
}