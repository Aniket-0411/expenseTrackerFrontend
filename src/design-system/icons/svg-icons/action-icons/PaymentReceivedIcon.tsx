import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Shows a mobile phone icon with incoming money transfer, useful to indicate
 * the user receiving funds.
 */
export function PaymentReceivedIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="payment-received-icon" {...styles}>
          <Path d="M6.3 18.5h4.4M14 9h6c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1zm-5.7 5-2-2 2-2m-2 2H10" />

          <Path d="M14 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h7a2 2 0 0 1 2 2v1" />
        </G>
      )}
    </BaseIconSVG>
  );
}
