import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a sun, that will be used to denote light mode switching.
 */
export function SunIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="sun-icon" {...styles}>
          <Path
            d="M15.49 8.46a5.003 5.003 0 0 1 0 7.07 5.003 5.003 0 0 1-7.07 0c-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0"
            id="sun-bg"
          />

          <Path d="M11.96 4V2m0 20v-2m6.36-14.36.71-.71M4.89 19.07l.71-.71M19.96 12h2m-20 0h2m14.36 6.36.71.71M4.89 4.93l.71.71" />
        </G>
      )}
    </BaseIconSVG>
  );
}
