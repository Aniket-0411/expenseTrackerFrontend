// TODO: Remove this once we add box props

import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Location icon.
 */
export function LocationIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={24} viewBox="0 0 24 24" width={24} {...props}>
      <Path
        d="M16 8.5c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C6.488 16.903 1 13.518 1 8.5 1 4 4.634 1 8.5 1c4 0 7.5 3 7.5 7.5Z"
        stroke="#222"
      />
      <Circle cx={8.5} cy={8.5} r={3.5} stroke="#222" />
    </Svg>
  );
}
