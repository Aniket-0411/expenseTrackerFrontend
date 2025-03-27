import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This the checkmark/tick icon.
 */
export function CheckIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>{(styles) => <Path d="m20 6.5-11 11-5-5" {...styles} />}</BaseIconSVG>
  );
}
