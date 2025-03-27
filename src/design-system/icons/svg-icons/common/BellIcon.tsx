import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders bell icon that will be used to denote notifications.
 */
export function BellIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="bell-icon" {...styles}>
          <Path d="M9.71 18.34v.36c0 1.27 1.02 2.3 2.29 2.3h0a2.29 2.29 0 0 0 2.29-2.29v-.36m-.46-12.6v-.92C13.83 3.82 13.01 3 12 3h0c-1.01 0-1.83.82-1.83 1.83v.92" />

          <Path d="M6.56 10.19h0c0-2.5 2.03-4.53 4.53-4.53h1.81c2.5 0 4.53 2.03 4.53 4.53h0v2.8c0 .53.21 1.04.59 1.41l.64.64c.38.38.59.88.59 1.41h0c0 1.04-.85 1.89-1.89 1.89H6.64c-1.04 0-1.89-.85-1.89-1.89h0c0-.53.21-1.04.59-1.41l.64-.64c.38-.38.59-.88.59-1.41v-2.8z" />
        </G>
      )}
    </BaseIconSVG>
  );
}
