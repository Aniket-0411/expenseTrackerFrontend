import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a clear filter icon for clearing active filtering search results.
 */
export function FilterClearIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="filter-clear-icon" {...styles}>
          <Path d="M10.2 12.83v3.42c0 .74.78 1.23 1.45.89l1.6-.8a1 1 0 0 0 .55-.89v-2.62l2.31-1.78c.25-.19.39-.48.39-.79V8.75c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v1.51c0 .31.14.6.39.79l2.31 1.78z" />

          <Path d="M13 21H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v7m-1 4-3 3m0-3 3 3" />
        </G>
      )}
    </BaseIconSVG>
  );
}
