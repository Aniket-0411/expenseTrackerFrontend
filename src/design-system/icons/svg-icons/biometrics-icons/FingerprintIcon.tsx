import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the fingerprint id icon used for the biometrics touch Id
 * recognition.
 */
export function FingerprintIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          id="fingerprint-icon"
          {...styles}
          d="M8.4 4.43c3.5-2.3 8.1-1.3 10.4 2.1.8 1.2 1.2 2.7 1.2 4.1 0 2.9-.6 5.7-1.6 8.3M6.3 6.53c-.8 1.2-1.2 2.6-1.2 4.1 0 1.4-.4 2.8-1.1 4m1.9 3.6c1.9-2.1 2.9-4.8 2.9-7.6 0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .5 0 1-.1 1.6m-3.7-1.61c0 3.6-1.3 7-3.6 9.8m6.6-4.6c-.5 1.9-1.4 3.7-2.5 5.3"
        />
      )}
    </BaseIconSVG>
  );
}
