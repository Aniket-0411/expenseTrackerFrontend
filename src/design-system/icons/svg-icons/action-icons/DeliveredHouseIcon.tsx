import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a house/store with a delivery a the door to mean the item has been
 * delivered.
 */
export function DeliveredHouseIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="delivered-house-icon" {...styles}>
          <Path d="M6.5 21h5m-2-13h4m-7 7h5m-5 3h5m5-6h-10v9" />

          <Path d="M11.5 21h-9V7.89c0-.73.39-1.4 1.03-1.75l7-3.89c.6-.34 1.34-.34 1.94 0l7 3.89c.63.35 1.03 1.02 1.03 1.75V12" />

          <Path d="M15.5 15h5c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm3.08 3h-1.16" />
        </G>
      )}
    </BaseIconSVG>
  );
}
