import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a minus svg icon
 */
export function MinusIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M16 12H8"
          stroke="#9333EA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
