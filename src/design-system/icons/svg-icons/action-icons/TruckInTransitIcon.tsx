import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a delivery truck with a motion lines to show that the tracked package
 * is still in transit.
 */
export function TruckInTransitIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="truck-intransit-icon" {...styles}>
          <Path d="M18.7 17.8c.62.62.62 1.62 0 2.24-.62.62-1.62.62-2.24 0-.62-.62-.62-1.62 0-2.24.62-.62 1.63-.62 2.24 0m-11 0c.62.62.62 1.62 0 2.24-.62.62-1.62.62-2.24 0-.62-.62-.62-1.62 0-2.24s1.63-.62 2.24 0M10 3.5h4c.55 0 1 .45 1 1v10H2" />

          <Path d="M5 18.92H3c-.55 0-1-.45-1-1V12.5m13-6h4.32a1 1 0 0 1 .93.63l1.61 4.01c.09.24.14.49.14.74v5.95c0 .55-.45 1-1 1h-1.83m-3.17.09H8.17" />

          <Path d="M22 13.5h-4v-4h3.2M2 3.5h5m-5 3h3m-2 3H2" />
        </G>
      )}
    </BaseIconSVG>
  );
}
