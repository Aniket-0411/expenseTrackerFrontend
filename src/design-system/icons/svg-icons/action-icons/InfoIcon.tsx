import { Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders the info icon for triggering modals to provide additional information
 * about certain things.
 */
export function InfoIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <Path d="M6 8V6m0-2h.005M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0Z" id="info-icon" {...styles} />
      )}
    </BaseIconSVG>
  );
}
