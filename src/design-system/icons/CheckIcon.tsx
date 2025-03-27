import Svg, { Path } from 'react-native-svg';

type CheckIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};

/**
 * -----------------------------------------------------------------------------
 * A checkmark icon.
 */
export function CheckIconAlt({
  width = 14,
  height = 11,
  fill = '#B61D22',
  stroke = '#B61D22',
}: CheckIconProps) {
  return (
    <Svg fill="none" height={height} viewBox="0 0 14 11" width={width}>
      <Path
        d="M12.8144 2.24389L13.0026 2.40851C13.3662 1.99288 13.3241 1.36111 12.9085 0.997433V0.997433C12.4929 0.633752 11.8611 0.675869 11.4974 1.0915L5.58999 7.84284L2.40457 5.0849C1.98703 4.7234 1.3555 4.76882 0.993999 5.18635C0.632497 5.60389 0.677921 6.23542 1.09545 6.59692L5.03295 10.006C5.44894 10.3662 6.07774 10.3226 6.44008 9.90849L13.0026 2.40851L12.8144 2.24389Z"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
    </Svg>
  );
}
