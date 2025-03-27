import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `NewsLetterIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function NewsLetterIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={19} viewBox="0 0 16 19" width={16} {...props}>
      <Rect height={17} rx={2} stroke="#B61D22" width={14} x={1} y={1} />
      <Path d="M5 6h6M5 10h6M5 14h4" stroke="#B61D22" strokeLinecap="round" />
    </Svg>
  );
}
