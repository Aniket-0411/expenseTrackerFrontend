import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `ServiceRequestIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function ServiceRequestIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={22} viewBox="0 0 22 22" width={22} {...props}>
      <Path
        d="M10.264 4.53H9c-3.771 0-5.657 0-6.828 1.17C1 6.873 1 8.759 1 12.53V19c0 .942 0 1.414.293 1.707C1.586 21 2.057 21 3 21h6.47c3.771 0 5.657 0 6.829-1.172C17.47 18.656 17.47 16.771 17.47 13v-1.265"
        stroke="#B61D22"
        strokeWidth={1.2}
      />
      <Path
        d="M5.706 10.411h7.059M5.706 15.117h3.53M17.47 8.059V1m-3.529 3.53h7.06"
        stroke="#B61D22"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
    </Svg>
  );
}
