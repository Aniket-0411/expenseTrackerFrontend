import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders language switch icon.
 */
export function LanguageIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="language-icon" {...styles}>
          <Path d="m19.03 18.63-2.12-4.25-2.13 4.25m.37-.75h3.5" />

          <Path d="M16.9 21.95h0c-2.79 0-5.05-2.26-5.05-5.05h0c0-2.79 2.26-5.05 5.05-5.05h0c2.79 0 5.05 2.26 5.05 5.05h0c0 2.79-2.26 5.05-5.05 5.05zM5.05 2.05h3.9c1.66 0 3 1.34 3 3v3.9c0 1.66-1.34 3-3 3h-3.9c-1.66 0-3-1.34-3-3v-3.9c0-1.66 1.34-3 3-3zm3.97 3.83H4.98M7 5.2v.68" />

          <Path d="M8.01 5.87c0 1.74-1.36 3.15-3.04 3.15" />

          <Path d="M9.02 9.03c-.73 0-1.38-.39-1.84-1m7.33-3.16h1.47c2.02 0 3.66 1.64 3.66 3.66m-5.13-3.66 1.1 1.1m0-2.2-1.1 1.1M9.39 19.03H7.92c-2.02 0-3.66-1.64-3.66-3.66m5.13 3.66-1.1-1.1m0 2.2 1.1-1.1" />
        </G>
      )}
    </BaseIconSVG>
  );
}
