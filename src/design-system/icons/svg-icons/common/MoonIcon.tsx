import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a moon, that will be used to denote dark mode switching.
 */
export function MoonIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M19.7 15c-2.5.8-5.4.3-7.4-1.7-2.5-2.5-2.7-6.5-.7-9.3-4.1.4-7.3 3.8-7.3 8 0 4.4 3.6 8 8 8 3.3 0 6.2-2.1 7.4-5h0z"
          id="moon"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
