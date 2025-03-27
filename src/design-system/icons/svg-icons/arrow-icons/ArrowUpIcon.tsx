import { Path } from 'react-native-svg';

import { BaseIconSVG } from '../BaseIconSVG';
import { IIconProps } from '../types';

export function ArrowUpIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path
          d="m16 14-4-4-4 4"
          stroke="#323232"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          {...styles}
        />
      )}
    </BaseIconSVG>
  );
}
