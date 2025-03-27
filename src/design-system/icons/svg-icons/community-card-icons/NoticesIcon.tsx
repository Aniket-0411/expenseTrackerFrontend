import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `NoticesIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function NoticesIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={21} viewBox="0 0 16 21" width={16} {...props}>
      <Path
        d="M11.5 3c1.405 0 2.107 0 2.611.337a2 2 0 01.552.552C15 4.393 15 5.096 15 6.5V16c0 1.886 0 2.828-.586 3.414C13.828 20 12.886 20 11 20H5c-1.886 0-2.828 0-3.414-.586C1 18.828 1 17.886 1 16V6.5c0-1.404 0-2.107.337-2.611a2 2 0 01.552-.552C2.393 3 3.096 3 4.5 3"
        stroke="#B61D22"
        strokeWidth={1.2}
      />
      <Path d="M5 3a2 2 0 012-2h2a2 2 0 110 4H7a2 2 0 01-2-2z" stroke="#B61D22" strokeWidth={1.2} />
      <Path d="M5 10h6M5 14h4" stroke="#B61D22" strokeLinecap="round" strokeWidth={1.2} />
    </Svg>
  );
}
