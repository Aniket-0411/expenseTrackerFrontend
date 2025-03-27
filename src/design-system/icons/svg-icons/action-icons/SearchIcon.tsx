import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a magnifying glass search icon
 */
export function SearchIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="m21 21-5.2-5.2m0 0c2.93-2.93 2.93-7.68 0-10.61S8.13 2.27 5.2 5.2s-2.93 7.68 0 10.61 7.67 2.92 10.6-.01z"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
