import { Path, G } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a image upload icon
 */
export function ImageUploadIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="image-upload-icon" {...styles}>
          <Path d="M21.004 9.999v7.003a4.002 4.002 0 0 1-4.002 4.002H6.998a4.002 4.002 0 0 1-4.002-4.002V6.998a4.002 4.002 0 0 1 4.002-4.002H13" />
          <Path d="m2.996 13 1.296-1.296a2.412 2.412 0 0 1 3.411 0L12 16.002M7 21.004l6.299-6.298a2.412 2.412 0 0 1 3.41 0l3.942 3.941M18.003 2.996 15.5 5.497M20.503 5.497l-2.5-2.5M18.003 2.996v5.002" />
        </G>
      )}
    </BaseIconSVG>
  );
}
