import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders the homes screen tab when it's actively selected
 */
export function HomeTabActiveIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="tab-icon-home-active" {...styles}>
          <Path
            clip-rule="evenodd"
            d="m19.842 8.299-6-4.667a3 3 0 0 0-3.684 0l-6 4.667A2.998 2.998 0 0 0 3 10.667V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.333c0-.926-.427-1.8-1.158-2.368Z"
            fill="#F0EAD8"
            stroke="#F0EAD8"
          />
          <Path d="M9 17h6" id="door" stroke="red" />
        </G>
      )}
    </BaseIconSVG>
  );
}
