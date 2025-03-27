import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a stack of cards/layers group to be using in showing items in stack.
 */
export function StackGroupIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="stack-group-icon" {...styles}>
          <Path d="m18.99 17.13-7 3.89c-.67.37-1.49-.11-1.49-.87v-7.71c0-.36.2-.7.51-.87l7-3.89c.67-.37 1.49.11 1.49.87v7.71a1 1 0 0 1-.51.87z" />

          <Path d="M16.5 4.85 8.01 9.67c-.32.18-.51.51-.51.87v8.31" />

          <Path d="M13.5 2.85 5.01 7.56c-.31.18-.51.51-.51.88v7.41" />
        </G>
      )}
    </BaseIconSVG>
  );
}
