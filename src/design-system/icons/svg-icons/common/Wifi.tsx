import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a WIFI, shown when there is an internet connection.
 */
export function Wifi(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="deals-icon-bids" {...styles}>
          <G id="bag-body">
            <Path
              {...styles}
              d="M21 9c0 1.9-1.6 3.5-3.5 3.5H14v1.2c0 .2-.1.3-.3.3h-3.4c-.2 0-.3-.1-.3-.3v-1.2H6.5C4.6 12.5 3 10.9 3 9v8c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V9"
            />

            <Path
              {...styles}
              d="M21 9c0-.5-.2-1-.6-1.4-.3-.4-.8-.6-1.4-.6H5c-.9 0-1.7.6-1.9 1.5 0 .1-.1.3-.1.5 0 1.9 1.6 3.5 3.5 3.5H10v-1.2c0-.2.1-.3.3-.3h3.4c.2 0 .3.1.3.3v1.2h3.5c1.9 0 3.5-1.6 3.5-3.5"
            />
          </G>

          <Path d="M8 7V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2H8z" fill="none" id="bag-handle" />
        </G>
      )}
    </BaseIconSVG>
  );
}
