import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a signout icon used to show the log out action.
 */
export function SignoutIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="eye-hidden" {...styles}>
          <Path d="M3 11.99h11m-3-3 3 3-3 3" />

          <Path d="M6 9.13V7.39a2 2 0 0 1 1.61-1.96l11-2.41c.61-.07 1.23.13 1.69.54.46.41.72 1.01.71 1.63V19c0 .59-.26 1.15-.71 1.53-.45.38-1.05.54-1.63.44l-11-1.89A2.015 2.015 0 0 1 6 17.1v-2.14" />
        </G>
      )}
    </BaseIconSVG>
  );
}
