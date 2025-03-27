import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a generic icon when the app fails to load an image URL.
 * For now we are showing an image with a loading icon. But we will later have
 * individual category images.
 */
export function LoadingImageIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="loading-image-icon" {...styles}>
          <Path d="m3 12.5 1.3-1.3c.45-.45 1.06-.7 1.7-.7.64 0 1.25.25 1.7.71h0l4.3 4.3" />

          <Path d="m7 20.5 6.29-6.29c.94-.94 2.47-.94 3.41 0l3.94 3.94" />

          <Path d="M21 12.5v4c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5v-8c0-2.76 2.24-5 5-5h3m6.97-1v1m0 5v1m-3.03-5.25.87.5m4.32 2.5.87.5m-6.06 0 .87-.5m4.32-2.5.87-.5" />
        </G>
      )}
    </BaseIconSVG>
  );
}
