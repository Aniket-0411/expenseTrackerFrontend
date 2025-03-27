import Svg, { Rect, Path } from 'react-native-svg';

interface ICalendarIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

/**
 * -----------------------------------------------------------------------------
 * A calendar icon.
 */
export function CalendarIcon({
  width = 20,
  height = 20,
  fill = '#B61D22',
  stroke = '#B61D22',
}: ICalendarIconProps) {
  return (
    <Svg fill="none" height={height} viewBox="0 0 20 20" width={width}>
      <Rect height="15" rx="2" stroke={stroke} width="18" x="1" y="4" />
      <Path
        d="M1 8C1 6.11438 1 5.17157 1.58579 4.58579C2.17157 4 3.11438 4 5 4H15C16.8856 4 17.8284 4 18.4142 4.58579C19 5.17157 19 6.11438 19 8H1Z"
        fill={fill}
      />
      <Path d="M5 1L5 4" stroke={stroke} strokeLinecap="round" />
      <Path d="M15 1L15 4" stroke={stroke} strokeLinecap="round" />
    </Svg>
  );
}
