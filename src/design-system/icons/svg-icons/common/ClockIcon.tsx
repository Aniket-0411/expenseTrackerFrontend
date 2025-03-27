import { Circle, G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders clock/watch icon that will be used to denote dates.
 */
export function ClockIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="clock-icon" {...styles}>
          <Circle cx={12} cy={12} r={9} />

          <Path d="M15.46 13.15 12 12V6" />
        </G>
      )}
    </BaseIconSVG>
  );
}
