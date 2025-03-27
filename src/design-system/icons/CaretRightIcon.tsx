import Svg, { Path } from 'react-native-svg';

interface ICaretRightIconProps {
  // fill?: string;
  height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * -----------------------------------------------------------------------------
 * A right-pointing caret icon
 */
export function CaretRightIcon({ ...props }: ICaretRightIconProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        d="m1 16 8-7.5L1 1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}
