import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an input filed with masked inputs icon, to be used to denote
 * a change password action.
 */
export function ChangePasswordIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M13 3h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1m-3 16V5m-3 8-2-2m2 0-2 2m-2.42 0-2-2m2 0-2 2M19 21h-1c-1.1 0-2-.9-2-2 0 1.1-.9 2-2 2h-1m0-4H5a2 2 0 0 1-2-2V9c0-1.11.89-2 2-2h8m3 10h3c1.1 0 2-.9 2-2V9a2 2 0 0 0-2-2h-3"
          id="change-password-icon"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
