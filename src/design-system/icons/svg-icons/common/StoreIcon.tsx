import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders store icon that is used to denote a branch on the app.
 */
export function StoreIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="store-icon" {...styles}>
          <Path d="M7.5 9.25c0 1.24-1.01 2.25-2.25 2.25M12 9.25c0 1.24-1.01 2.25-2.25 2.25S7.5 10.49 7.5 9.25m9 0c0 1.24-1.01 2.25-2.25 2.25S12 10.49 12 9.25m6.75 2.25c-1.24 0-2.25-1.01-2.25-2.25m3.5 1.87v9.38m2 0H2m2-9.38v9.38m10-6h3c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5zm-7 6V15c0-.28.22-.5.5-.5H10c.28 0 .5.22.5.5v5.5m-3-11.25V8.5m4.5.75V8.5m4.5.75V8.5m4.41 0H3.09" />

          <Path d="M18.75 11.5h0C20 11.5 21 10.49 21 9.25v-.13c0-.41-.11-.81-.32-1.16l-2.1-3.5c-.36-.6-1.01-.97-1.71-.97H7.13c-.7 0-1.35.37-1.72.97l-2.1 3.5c-.21.35-.32.75-.31 1.16v.13c0 1.24 1 2.25 2.25 2.25h0" />
        </G>
      )}
    </BaseIconSVG>
  );
}
