import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a desktop view icon
 */
export function DesktopViewIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M18.43 17H5.57A2.57 2.57 0 0 1 3 14.43V5.57A2.57 2.57 0 0 1 5.57 3h12.86A2.57 2.57 0 0 1 21 5.57v8.86A2.57 2.57 0 0 1 18.43 17zM14 17l.5 4M10 17l-.5 4m-1.36 0h7.72"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
