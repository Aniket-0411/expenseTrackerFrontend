import { Circle, G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a phone image icon
 */
export function PhoneImageIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="phone-icon" {...styles}>
          <Path d="M9.8 9v1.98c-.03.33.22.63.55.66h3.3c.33-.03.58-.33.55-.66V9" />

          <Path d="M6.5 18.98V11.2c0-1.22.98-2.2 2.2-2.2h6.6c1.22 0 2.2.99 2.2 2.2v7.92" />

          <Circle cx={12} cy={12} r={9} />
        </G>
      )}
    </BaseIconSVG>
  );
}
