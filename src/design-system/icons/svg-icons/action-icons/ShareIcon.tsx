import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a Share Icon to directly share the deal.
 */
export function ShareIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="share-icon" {...styles}>
          <Path d="M18.4 5.6c3.5 3.5 3.5 9.2 0 12.7s-9.2 3.5-12.7 0-3.5-9.2 0-12.7 9.1-3.5 12.7 0" />

          <Path d="M12.3 12.6c-2.2 0-4.1.8-5.1 3.1V15c0-3.4 2.3-5.5 5.1-5.5V8c0-.5.6-.8 1-.5l3.7 3.1c.3.2.3.7 0 .9l-3.7 3.4c-.4.4-1 .1-1-.5v-1.8Z" />
        </G>
      )}
    </BaseIconSVG>
  );
}
