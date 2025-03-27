import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a delivery truck with a check to show that the tracked package has
 * been delivered.
 */
export function TruckDeliveredIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="truck-delivered-icon" {...styles}>
          <Path d="M15 8h4.32a1 1 0 0 1 .93.63l1.61 4.01c.09.24.14.49.14.74v5.95c0 .55-.45 1-1 1h-1.83m-3.17.09H8.17" />

          <Path d="M22 15h-4v-4h3.2m-8.64-5H14c.55 0 1 .45 1 1v9H2m16.7 3.3c.62.62.62 1.62 0 2.24-.62.62-1.62.62-2.24 0-.62-.62-.62-1.62 0-2.24.62-.62 1.63-.62 2.24 0m-11 0c.62.62.62 1.62 0 2.24-.62.62-1.62.62-2.24 0-.62-.62-.62-1.62 0-2.24s1.63-.62 2.24 0" />

          <Path d="M5 20.42H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1.24" />

          <Path d="M8.4 10.32c-2.3 0-4.16-1.86-4.16-4.16C4.24 3.91 6.15 2 8.4 2c2.3 0 4.15 1.86 4.15 4.16s-1.86 4.16-4.15 4.16" />

          <Path d="M10.24 5.23 7.93 7.55 6.55 6.16" />
        </G>
      )}
    </BaseIconSVG>
  );
}
