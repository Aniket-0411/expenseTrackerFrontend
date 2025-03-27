import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This the chevron arrow icon pointing down
 */
export function ChevronDownIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>{(styles) => <Path d="m21.43 7.66-9 9-9-9" {...styles} />}</BaseIconSVG>
  );
}
