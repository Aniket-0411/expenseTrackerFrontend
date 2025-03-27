import { Circle, G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a profile icon
 */
export function ProfileIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="profile-icon" {...styles}>
          <Circle cx={12} cy={12} r={9} />

          <Path d="M12 6.75h0c1.66 0 3 1.34 3 3v.5c0 1.66-1.34 3-3 3h0c-1.66 0-3-1.34-3-3v-.5c0-1.66 1.34-3 3-3zM5.63 18.37h0A8.069 8.069 0 0 1 11.34 16h1.21c1.59 0 3.15.47 4.48 1.36l1.4.93" />
        </G>
      )}
    </BaseIconSVG>
  );
}
