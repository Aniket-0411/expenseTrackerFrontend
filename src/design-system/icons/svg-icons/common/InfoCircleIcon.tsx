import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders information circle icon that will be used to denote information
 * areas such as about the app.
 */
export function InfoCircleIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="info-circle-icon" {...styles}>
          <Path d="M12 8c-.14 0-.25.11-.25.25s.11.25.25.25.25-.11.25-.25S12.14 8 12 8" />

          <Path d="M12 21h0a9 9 0 0 1-9-9h0a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9zM12 12v5" />
        </G>
      )}
    </BaseIconSVG>
  );
}
