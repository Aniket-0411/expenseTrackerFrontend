import { Circle, G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an link icon to be used in representing a link.
 */
export function LinkIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="call-icon" {...styles}>
          <Circle cx={12} cy={12} r={9} strokeLinecap="round" strokeLinejoin="round" />

          <Path
            d="M11 13c1 1 2.6 1 3.5 0l1.6-1.6c.8-.8.8-2 0-2.8l-.7-.7c-.8-.8-2-.8-2.8 0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M13 11c-1-1-2.6-1-3.5 0l-1.6 1.6c-.8.8-.8 2 0 2.8l.7.7c.8.8 2 .8 2.8 0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
