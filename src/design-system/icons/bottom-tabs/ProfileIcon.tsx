import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Icon for the Profile tab.
 */
export function ProfileIconAlt(props: SvgProps) {
  const { color } = props;

  return (
    <Svg fill="none" {...props}>
      <Path
        d="M16.098 16.79c-.437-1.225-1.401-2.308-2.743-3.08s-2.984-1.19-4.675-1.19c-1.69 0-3.334.418-4.675 1.19-1.342.772-2.306 1.854-2.743 3.08"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.3}
      />
      <Circle cx={8.68} cy={4.84} r={3.84} stroke={color} strokeLinecap="round" strokeWidth={1.3} />
    </Svg>
  );
}
