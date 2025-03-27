import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an envelope icon to be used in representing emails.
 */
export function EmailIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="email-icon" {...styles}>
          <Path
            clipRule="evenodd"
            d="M3 6.8v0c0 .6.3 1.1.8 1.5l6 4.1c1.4.9 3.1.9 4.5 0l6-4c.4-.5.7-1 .7-1.6v0c0-1-.8-1.8-1.8-1.8H4.8C3.8 5 3 5.8 3 6.8Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7M3.588 18.412l6.094-6.094m4.678.042 6.052 6.052"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
