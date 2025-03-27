import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a close button
 */
export function XMarkIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => <Path d="M6 18 18 6M6 6l12 12" {...styles} />}
    </BaseIconSVG>
  );
}
