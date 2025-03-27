import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders an telephone receiver icon to be used in representing call.
 */
export function CallIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="call-icon" {...styles}>
          <Path
            d="M9.651 13.346c2.183 2.184 4.949 3.576 6.594 1.938l.399-.399a1.202 1.202 0 0 0-.159-1.839c-.389-.271-.807-.562-1.269-.887a1.213 1.213 0 0 0-1.549.127l-.451.448a9.67 9.67 0 0 1-1.626-1.322l-.002-.002a9.63 9.63 0 0 1-1.322-1.626l.448-.451a1.212 1.212 0 0 0 .126-1.55c-.325-.461-.616-.878-.885-1.266a1.201 1.201 0 0 0-1.84-.161l-.399.399C6.079 8.4 7.47 11.164 9.653 13.349"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
          />

          <Path
            clipRule="evenodd"
            d="m14 20-2 2-2-2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-4Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
