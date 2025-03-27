import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a magnifying glass search icon with x-mark for closing the search.
 */
export function SearchCloseIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M18.93 11.47h0a7.47 7.47 0 0 1-7.47 7.47h0C7.34 18.93 4 15.59 4 11.47h0C4 7.34 7.34 4 11.47 4h0c4.12 0 7.46 3.34 7.46 7.47zM20 20l-3.25-3.25m-2.94-7.63-4.7 4.7m4.7 0-4.7-4.7"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
