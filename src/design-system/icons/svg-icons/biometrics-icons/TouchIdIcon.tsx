import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the touch id icon used for the biometrics fingerprint recognition.
 */
export function TouchIdIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="touch-id-icon" {...styles}>
          <Path d="M12 21h0a9 9 0 0 1-9-9h0a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9zm6-8v1m-6-2v6" />

          <Path d="M6.84 8.96C6.31 9.85 6 10.89 6 12v2m11.65-4A5.99 5.99 0 0 0 12 6c-1.11 0-2.15.31-3.04.84M15 17v-5c0-1.66-1.34-3-3-3s-3 1.34-3 3v1m0 3v1" />
        </G>
      )}
    </BaseIconSVG>
  );
}
