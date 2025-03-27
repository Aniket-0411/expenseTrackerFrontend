import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the warning-alert-refresh-icon
 */
export function WarningAlertRefreshIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="warning-alert-refresh-icon" {...styles}>
          <Path d="M12 12.33V9m0 5.83c-.09 0-.17.07-.17.17 0 .09.07.17.17.17s.17-.07.17-.17-.08-.17-.17-.17" />

          <Path d="M17.65 17.65A7.94 7.94 0 0 1 12 20a7.998 7.998 0 0 1-7.8-9.77" />

          <Path d="m2 12 2-2 2 2m16 0-2 2-2-2" />

          <Path d="M6.34 6.34A8.014 8.014 0 0 1 12 4a7.998 7.998 0 0 1 7.8 9.77" />
        </G>
      )}
    </BaseIconSVG>
  );
}
