// TODO: Remove this once we add box props
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import Svg, { SvgProps, Path } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Email icon.
 */
export function EmailIcon(props: SvgProps) {
  return (
    <Svg
      fill="none"
      {...props}
      style={{ backgroundColor: '#FF0', margin: 0, padding: 0, alignItems: 'center' }}
    >
      <Path
        d="m5.167 4.5 4.167 2.917L13.5 4.5"
        stroke="#B61D22"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
      />
      <Path
        d="M1 11.167V2.834a1.667 1.667 0 0 1 1.667-1.667H16a1.667 1.667 0 0 1 1.667 1.667v8.333A1.667 1.667 0 0 1 16 12.834H2.667A1.667 1.667 0 0 1 1 11.167Z"
        stroke="#B61D22"
        strokeWidth={1.6}
      />
    </Svg>
  );
}
