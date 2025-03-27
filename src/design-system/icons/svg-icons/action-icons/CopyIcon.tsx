import { G, Path, Rect } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a CopyIcon to enable the copy to clipboard functionality
 */
export function CopyIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="copy-icon" {...styles}>
          <Rect height={14.006} rx={2} width={14.006} x={6.998} y={6.998} />

          <Path d="M6.998 17.002H4.997a2 2 0 0 1-2-2V4.996a2 2 0 0 1 2-2h10.004a2 2 0 0 1 2.001 2v2" />
        </G>
      )}
    </BaseIconSVG>
  );
}
