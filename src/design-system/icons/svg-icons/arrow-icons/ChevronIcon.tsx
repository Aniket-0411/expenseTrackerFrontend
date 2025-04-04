import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This the chevron icon.
 */
export function ChevronIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => <Path d="M15.75 19.5 8.25 12l7.5-7.5" {...styles} />}
    </BaseIconSVG>
  );
}
