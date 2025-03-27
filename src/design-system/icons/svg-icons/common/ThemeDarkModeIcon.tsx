import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders the dark mode icon of a theme, to be used as a theme switch.
 */
export function ThemeDarkModeIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="theme-dark-mode-icon" {...styles}>
          <Path
            d="M8.83 18.66H6.34c-.55 0-1-.45-1-1v-2.48c0-.27-.11-.52-.29-.71l-1.76-1.76C3.11 12.52 3 12.27 3 12s.11-.52.29-.71l1.77-1.77c.18-.18.28-.42.28-.67V6.34c0-.55.45-1 1-1h2.48c.27 0 .52-.11.71-.29l1.76-1.76c.19-.18.44-.29.71-.29s.52.11.71.29l1.76 1.76c.19.19.44.29.71.29h2.48c.55 0 1 .45 1 1v2.48c0 .27.11.52.29.71l1.76 1.76c.18.19.29.44.29.71s-.11.52-.29.71l-1.76 1.76a.99.99 0 0 0-.29.71v2.48c0 .55-.45 1-1 1h-2.48c-.27 0-.52.11-.71.29l-1.76 1.76c-.19.18-.44.29-.71.29s-.52-.11-.71-.29l-1.76-1.76a.967.967 0 0 0-.7-.29z"
            id="background"
          />

          <Path d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4v8z" id="half-moon" />
        </G>
      )}
    </BaseIconSVG>
  );
}
