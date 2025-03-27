import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the face id icon used for the biometrics facial recognition.
 */
export function FaceIdIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="faceId-icon" {...styles}>
          <Path
            d="M3.1 8.1V6.4c0-1.8 1.5-3.3 3.3-3.3H8m-.1 17.8H6.4c-1.8 0-3.3-1.5-3.3-3.3V16m17.8-.1v1.6c0 1.8-1.5 3.3-3.3 3.3h-1.7m0-17.7h1.7c1.8 0 3.3 1.5 3.3 3.3V8"
            id="head"
          />

          <Path
            d="M8.1 9.1v2.4m7.8-2.4v2.4m-7.3 4.4s3.2 3.3 6.8 0m-3.3-6.6v4.4s0 .7-1.5.4"
            id="face"
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
