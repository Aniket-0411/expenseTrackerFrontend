import { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';
import { BaseIconSVG } from '../BaseIconSVG';

/**
 * -----------------------------------------------------------------------------
 * This is renders a key lock used to indicate a password field
 */
export function KeyIcon(props: IIconProps) {
  return (
    <BaseIconSVG {...props}>
      {(styles) => (
        <G id="key-icon" {...styles}>
          <Path
            clipRule="evenodd"
            d="M9.418 17.373v-1.414h1.768l1.501-1.501 2.072.88c.751.319 1.62.15 2.196-.427l2.943-2.943a2.001 2.001 0 0 0 .427-2.196l-1.502-3.536a1.999 1.999 0 0 0-1.059-1.06l-3.536-1.501a1.999 1.999 0 0 0-2.196.427L9.089 7.045a2 2 0 0 0-.426 2.196l.857 2.019-6.024 6.024v3.182h3.182l1.326-1.326v-1.768h1.414v0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M14.376 8.894a.433.433 0 1 0 .002 0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      )}
    </BaseIconSVG>
  );
}
