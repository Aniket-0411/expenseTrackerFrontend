import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a filter icon for filtering search results.
 */
export function FilterIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="m7.45 11.89 1-.5c.34-.17.55-.51.55-.89V8.53c0-.33.17-.64.44-.83l2.11-1.41c.28-.18.45-.49.45-.82V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1.47c0 .33.17.64.44.83l2.11 1.4c.28.19.45.5.45.83V11c0 .74.78 1.23 1.45.89zM6 16v3a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2h-3m-3 6h4m-5 4h5m-7 4h7"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
