import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a sorting icon for ordering search results in DESC & ASC order.
 */
export function SortIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="M13.25 14.875V2.833m-10.625 0H9M4.042 5.667H9M5.458 8.5H9m-2.55 2.833H9m4.25 3.542 1.77-1.771m-3.541 0 1.77 1.77"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
