import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a Wifi Slashed in half, shown when there is no internet connection.
 */
export function WifiSlash(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="m11.47 18.59.53.53.53-.53a.754.754 0 0 0-1.06 0zm-.19-9.18c-2.25.17-4.45 1.1-6.17 2.82m9.01-7.18c-4.32-.65-8.87.68-12.2 4m13.79 6.36a5.242 5.242 0 0 0-2.88-1.46m6.06-1.72A9.633 9.633 0 0 0 15.41 10m6.67-.95a14.238 14.238 0 0 0-4.17-2.88M7.9 14.83c-.21.18-.41.37-.59.58m-.87 6.02L18.62.95"
          id="wifi-slash"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
