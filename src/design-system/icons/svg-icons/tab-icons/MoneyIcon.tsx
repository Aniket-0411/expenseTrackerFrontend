import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This renders a money icon to reflect transaction specific functionality.
 * - Usage: `Transaction` tab in the bottom navigation.
 */
export function MoneyIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="transaction-tab-icon" {...styles}>
          <Path
            d="m22.1 10.7-1.9-6.9c-.3-1.3-1.7-2-3-1.7L4.7 5.5c-1.3.4-2.1 1.7-1.8 3l.4 1.5h13.2c1.4 0 2.5 1.1 2.5 2.4V14l1.3-.4c1.4-.3 2.2-1.6 1.8-2.9z"
            fill="none"
            id="money-2"
          />

          <Path
            d="M16.5 10h-13C2.1 10 1 11.1 1 12.4v7.2C1 20.9 2.1 22 3.5 22h13c1.4 0 2.5-1.1 2.5-2.4v-7.2c0-1.3-1.1-2.4-2.5-2.4zm-5.1 7.4c-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8z"
            id="money"
          />

          <Path d="M4 15v2M16 15v2" />
        </G>
      )}
    </BaseIconSVG>
  );
}
