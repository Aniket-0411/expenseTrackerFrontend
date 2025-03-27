import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a fields icon with a pen to denote the edit mode.
 */
export function EditFieldsIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="m17.79 20.21 3.41-3.41a.996.996 0 0 0 0-1.41l-1.59-1.59a.996.996 0 0 0-1.41 0l-3.41 3.41a.99.99 0 0 0-.29.71v2.59h2.59c.26-.01.51-.11.7-.3h0zM6.5 13.5h4m-4-5h8m4 1v-3c0-1.66-1.34-3-3-3h-10c-1.66 0-3 1.34-3 3v9c0 1.66 1.34 3 3 3h5"
          id="edit-fields-icon"
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
