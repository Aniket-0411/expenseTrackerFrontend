import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a refresh with close icon button. Used to denote an app
 * refresh.
 */
export function RefreshCloseIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="refresh-app-icon" {...styles}>
          <Path d="M20.42 4.8v2.9h-2.89 2.89M18.75 21h-4.5C13.01 21 12 19.99 12 18.75v-4.5c0-1.24 1.01-2.25 2.25-2.25h4.5c1.24 0 2.25 1.01 2.25 2.25v4.5c0 1.24-1.01 2.25-2.25 2.25z" />

          <Path d="M9 20.48C5.51 19.24 3 15.92 3 12a9 9 0 0 1 16.91-4.3m-2.16 7.55-2.5 2.5m2.5 0-2.5-2.5" />
        </G>
      )}
    </BaseIconSVG>
  );
}
