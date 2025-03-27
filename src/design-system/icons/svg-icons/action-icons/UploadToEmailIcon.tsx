import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders an icon to show an email with an up arrow to show upload to email.
 */
export function UploadToEmailIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="upload-to-email-icon" {...styles}>
          <Path d="M3 9.5v9c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V9.73" />

          <Path d="m4.4 7.27 5.86-4.2c1.05-.75 2.45-.75 3.5 0l5.84 4.19c1.87 1.34 1.87 3.54 0 4.88l-5.85 4.2c-1.05.75-2.45.75-3.5 0l-5.85-4.2c-1.87-1.35-1.87-3.54 0-4.87z" />

          <Path d="m9.22 8.5 2.79-2 2.78 2M12 6.5v6" />
        </G>
      )}
    </BaseIconSVG>
  );
}
