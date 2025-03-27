import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an eye slashed in half to hide part of it. This is useful to
 * help toggle of the icon.
 */
export function EyeHiddenIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="eye-hidden" {...styles}>
          <Path d="M12 19c-.84 0-1.69-.18-2.5-.5m11.38-6.03C18.99 15.97 15.5 19 12 19m7.08-10.08c.69.81 1.31 1.69 1.8 2.61.16.29.16.64 0 .94M5 19 19 5m-9.23 9.23a3.157 3.157 0 0 1 0-4.46 3.157 3.157 0 0 1 4.46 0" />

          <Path d="M17.04 6.96C15.5 5.76 13.75 5 12 5c-3.5 0-6.99 3.03-8.88 6.53a.98.98 0 0 0 0 .94c.95 1.75 2.29 3.38 3.84 4.58" />
        </G>
      )}
    </BaseIconSVG>
  );
}
