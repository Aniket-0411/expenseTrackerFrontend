import { Path, G, Rect } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a image file icon
 */
export function ImageFileIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="image-file-icon" {...styles}>
          <Path d="M20.003 7.998h-4.001a1 1 0 0 1-1-1V2.996" />
          <Path d="M5.997 7.998v-3a2 2 0 0 1 2.001-2.002h7.175a2 2 0 0 1 1.415.587l2.83 2.829a2 2 0 0 1 .585 1.414v11.177a2 2 0 0 1-2 2H7.998a2 2 0 0 1-2-2v-1" />
          <Path d="M6.389 11a.278.278 0 1 1-.392 0 .279.279 0 0 1 .394 0M13 11.95a5.31 5.31 0 0 0-6.052 6.053" />
          <Rect height="10.004" rx="3" width="10.004" x="2.996" y="7.998" />
        </G>
      )}
    </BaseIconSVG>
  );
}
