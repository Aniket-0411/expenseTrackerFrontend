import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Renders a document icon with a PDF logo in the center
 */
export function PhoneIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="document-pdf-icon" {...styles}>
          <Path
            d="m2.68 1.987.28-.28a1 1 0 0 1 1.414 0L7.626 4.96a1 1 0 0 1 0 1.414L6.317 7.683a.622.622 0 0 0-.116.718 14.307 14.307 0 0 0 6.398 6.399c.24.12.529.072.718-.117l1.31-1.31a1 1 0 0 1 1.413 0l3.253 3.253a1 1 0 0 1 0 1.414l-.28.28a6 6 0 0 1-7.843.558L8.63 16.97a22.997 22.997 0 0 1-4.6-4.6L2.122 9.83a6 6 0 0 1 .558-7.843Z"
            stroke="#fff"
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
