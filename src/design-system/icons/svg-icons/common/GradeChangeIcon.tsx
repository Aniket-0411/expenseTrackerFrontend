import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a change from yes to no icon that will be used to denote
 * a grade change request.
 */
export function GradeChangeIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="bell-icon" {...styles}>
          <Path d="M16.75 2.5c2.62 0 4.75 2.13 4.75 4.75S19.37 12 16.75 12 12 9.87 12 7.25c0-2.63 2.13-4.75 4.75-4.75" />

          <Path d="m18.37 6.42-2.02 2.02-1.21-1.21M7.25 12C9.87 12 12 14.13 12 16.75S9.87 21.5 7.25 21.5 2.5 19.38 2.5 16.75C2.5 14.13 4.62 12 7.25 12m1.01 3.74-2.02 2.02m2.02 0-2.02-2.02M6.5 2.5 8 4 6.5 5.5" />

          <Path d="M3 7c0-1.66 1.34-3 3-3h2m9.5 17.5L16 20l1.5-1.5" />

          <Path d="M21 17c0 1.66-1.34 3-3 3h-2" />
        </G>
      )}
    </BaseIconSVG>
  );
}
