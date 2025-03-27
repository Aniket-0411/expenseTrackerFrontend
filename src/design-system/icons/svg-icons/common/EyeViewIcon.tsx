import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an eye view icon, for example show to allow the user to toggle
 * a password to be visible text.
 */
export function EyeViewIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="eye-view" {...styles}>
          <Path d="M3.12 12.47a.98.98 0 0 1 0-.94C5.01 8.03 8.5 5 12 5c3.49 0 6.99 3.03 8.88 6.53.16.29.16.64 0 .94C18.99 15.97 15.5 19 12 19c-3.5 0-6.99-3.03-8.88-6.53z" />

          <Path d="M14.12 9.77a3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0" />
        </G>
      )}
    </BaseIconSVG>
  );
}
