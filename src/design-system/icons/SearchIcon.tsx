import Svg, { Path, Circle } from 'react-native-svg';

interface ISearchIconProps {
  // fill?: string;
  height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * ---------------------------------------------------------------------------------------------
 * A Rating icon.
 */
export function SearchIcon({
  // fill,
  height = 22,
  // stroke,
  width = 20,
  ...props
}: ISearchIconProps) {
  return (
    <Svg fill="none" height={height} width={width} {...props} viewBox="0 0 18 18">
      <Circle cx={8} cy={8} r={7} stroke="#B61F24" strokeWidth={2} />
      <Path d="m17 17-3-3" stroke="#B61F24" strokeLinecap="round" strokeWidth={2} />
    </Svg>
  );
}
