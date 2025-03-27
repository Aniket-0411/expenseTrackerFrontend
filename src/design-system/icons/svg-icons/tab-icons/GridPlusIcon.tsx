import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This renders a grid icon with last square as a plus sign.
 * - Usage: `Bids/Home` tab in the bottom navigation.
 */
export function GridPlusIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="tab-icon-bids" {...styles}>
          <Path
            d="M8 10H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h3a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2z"
            id="box-1"
          />

          <Path
            d="M19 10h-3c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2z"
            id="box-2"
          />

          <Path
            d="M8 21H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2z"
            fill="none"
            id="box-3"
          />

          <Path d="M17.5 15v5m2.5-2.5h-5" id="plus" {...styles} />
        </G>
      )}
    </BaseIconSVG>
  );
}
