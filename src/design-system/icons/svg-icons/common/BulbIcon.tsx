import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a bulb
 */
export function BulbIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M12 18v-5.25m0 0c.51 0 1.01-.06 1.5-.19m-1.5.19c-.51 0-1.01-.06-1.5-.19m3.75 7.48c-1.49.28-3.01.28-4.5 0m3.75 2.38c-1 .1-2 .1-3 0M14.25 18v-.19c0-.98.66-1.82 1.51-2.32 3.58-2.08 4.81-6.66 2.73-10.25S11.83.44 8.24 2.51 3.43 9.18 5.51 12.76c.66 1.13 1.6 2.08 2.73 2.73.85.49 1.51 1.33 1.51 2.32V18"
          id="bulb-icon"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
