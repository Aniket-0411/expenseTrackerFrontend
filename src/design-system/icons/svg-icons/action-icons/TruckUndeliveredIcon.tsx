import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a delivery truck with an `x-mark` to mean that the item has not been
 * delivered.
 */
export function TruckUndeliveredIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="truck-undelivered-icon" {...styles}>
          <Path d="M14.7 8.17h4.32a1 1 0 0 1 .93.63l1.61 4.02c.09.24.14.49.14.74v6.04c0 .55-.45 1-1 1h-1.83m-3.17-.01H7.87" />

          <Path d="M21.7 15.17h-4v-4h3.2m-8.65-5h1.44c.55 0 1 .45 1 1v9h-13m16.71 3.3a1.59 1.59 0 0 1-1.12 2.71c-.64 0-1.22-.39-1.46-.98-.25-.59-.11-1.27.34-1.73.3-.3.7-.46 1.12-.46.42 0 .82.17 1.12.46m-11.01 0a1.59 1.59 0 0 1-1.12 2.71c-.64 0-1.22-.39-1.46-.98-.25-.59-.11-1.27.34-1.73.3-.3.7-.46 1.12-.46.42 0 .83.17 1.12.46" />

          <Path d="M4.69 20.59h-2c-.55 0-1-.45-1-1V7.17c0-.55.45-1 1-1h1.24m3.18-.82 1.96 1.96m-1.96 0 1.96-1.96" />

          <Path d="M8.09 10.49c2.3 0 4.16-1.86 4.16-4.16s-1.86-4.16-4.16-4.16-4.16 1.86-4.16 4.16 1.86 4.16 4.16 4.16z" />
        </G>
      )}
    </BaseIconSVG>
  );
}
