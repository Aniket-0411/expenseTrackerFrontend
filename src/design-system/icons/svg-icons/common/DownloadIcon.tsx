import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * Creates simple File Download icon
 */
export function DownloadIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="download-icon" {...styles}>
          <Path d="M3 15h4.382c.379 0 .725.214.894.553l.447.894c.17.339.516.553.895.553h4.764a.998.998 0 0 0 .894-.553l.447-.894c.17-.339.516-.553.895-.553H21" />

          <Path d="M17 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2m5.01 0v9" />

          <Path d="M8.409 8.41 12 12l3.591-3.59" />
        </G>
      )}
    </BaseIconSVG>
  );
}
