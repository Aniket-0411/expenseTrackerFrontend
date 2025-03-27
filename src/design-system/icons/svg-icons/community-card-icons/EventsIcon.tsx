import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `EventsIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function EventsIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={22} viewBox="0 0 22 22" width={22} {...props}>
      <Rect height={16.6667} rx={2} stroke="#B61D22" width={20} x={1} y={4.33301} />
      <Path
        d="M1 8.333c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h12c1.886 0 2.828 0 3.414.586C21 5.505 21 6.447 21 8.333v.444H1v-.444z"
        fill="#B61D22"
      />
      <Path d="M5.444 1v3.333M16.556 1v3.333" stroke="#B61D22" strokeLinecap="round" />
    </Svg>
  );
}
