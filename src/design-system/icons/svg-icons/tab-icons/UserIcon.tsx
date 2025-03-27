import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a user icon to reflect user specific functionality.
 * - Usage: `Profile` tab in the bottom navigation.
 */
export function UserIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="profile-tab-icon" {...styles}>
          <Path
            d="M20 21.1v-2c0-1.1-.4-2.1-1.2-2.8-.8-.8-1.8-1.2-2.8-1.2H8c-1.1 0-2.1.4-2.8 1.2C4.4 17 4 18 4 19.1v2h16z"
            id="body"
          />

          <Path d="M12 11.1c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" id="head" />
        </G>
      )}
    </BaseIconSVG>
  );
}
