import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a document with an information icon to be used in places for
 * seeking more info about documents such as contracts & agreements.
 */
export function DocumentInfoIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="document-info-icon" {...styles}>
          <Path d="M6 9.5h2m-2 4h4m-4 4h9m1-5c-2.76 0-5-2.24-5-5 0-2.7 2.3-5 5-5 2.76 0 5 2.24 5 5s-2.24 5-5 5m0-4.75v2" />

          <Path d="M16 5.28c-.08 0-.14.06-.14.14 0 .08.06.14.14.14.08 0 .14-.06.14-.14 0-.08-.06-.14-.14-.14m2 6.81v7.41c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2v-12c0-1.11.89-2 2-2h6.44" />
        </G>
      )}
    </BaseIconSVG>
  );
}
