import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the warning-alert-hexagon-icon
 */
export function WarningAlertHexagonIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="warning-alert-hexagon-icon" {...styles}>
          <Path d="M12 12V7.5m0 8c-.14 0-.25.11-.25.25s.11.25.25.25.25-.11.25-.25-.11-.25-.25-.25" />

          <Path d="M3 14.38V9.62c0-1.6.85-3.08 2.24-3.89l4.5-2.62c1.4-.81 3.13-.81 4.53 0l4.5 2.62C20.15 6.54 21 8.02 21 9.62v4.76a4.5 4.5 0 0 1-2.24 3.89l-4.5 2.62c-1.4.81-3.13.81-4.53 0l-4.5-2.62A4.513 4.513 0 0 1 3 14.38z" />
        </G>
      )}
    </BaseIconSVG>
  );
}
