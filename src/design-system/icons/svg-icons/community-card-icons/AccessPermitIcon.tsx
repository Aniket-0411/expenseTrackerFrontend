import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `AccessPermitIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function AccessPermitIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={23} viewBox="0 0 19 23" width={19} {...props}>
      <Path
        d="M1.5 14c0-1.886 0-2.828.586-3.414C2.672 10 3.614 10 5.5 10h8c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v2c0 2.828 0 4.243-.879 5.121C15.743 22 14.328 22 11.5 22h-4c-2.828 0-4.243 0-5.121-.879C1.5 20.243 1.5 18.828 1.5 16v-2z"
        stroke="#B61D22"
        strokeWidth={1.2}
      />
      <Path
        d="M14 10l.078-.62a5.519 5.519 0 00-2.41-5.273v0a5.519 5.519 0 00-6.68.416l-.818.708"
        stroke="#B61D22"
        strokeLinecap="round"
        strokeWidth={1.2}
      />
    </Svg>
  );
}
