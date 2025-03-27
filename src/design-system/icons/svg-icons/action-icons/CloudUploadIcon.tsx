import { Path, G } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a cloud upload icon
 */
export function CloudUploadIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="cloud-upload-icon" {...styles}>
          <Path d="M12 19v-7M9.833 14 12 11.833 14.167 14" />
          <Path d="M16 19h2.56c1.928 0 3.5-1.572 3.5-3.5s-1.572-3.5-3.5-3.5h-.435v-1c0-3.31-2.69-6-6-6-2.977 0-5.445 2.178-5.913 5.023-2.377.121-4.272 2.07-4.272 4.477a4.5 4.5 0 0 0 4.5 4.5H8" />
        </G>
      )}
    </BaseIconSVG>
  );
}
