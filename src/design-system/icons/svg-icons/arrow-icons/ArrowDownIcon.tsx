import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a magnifying glass search icon
 */
export function ArrowDownIcon(props: IIconProps) {
  return <BaseIconSVG {...props}>{(styles) => <Path d="m8 10 4 4 4-4" {...styles} />}</BaseIconSVG>;
}
