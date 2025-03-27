import Svg, { Path } from 'react-native-svg';

interface ICaretLeftIconProps {
  // fill?: string;
  height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * -----------------------------------------------------------------------------
 * A left-pointing caret icon.
 */
export function CaretLeftIcon({
  // fill,
  height = 21,
  // stroke,
  width = 12,
}: ICaretLeftIconProps) {
  return (
    <Svg fill="none" height={height} width={width}>
      <Path
        d="M10.25 19.5 1 10.25 10.25 1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
      />
    </Svg>
  );
}
