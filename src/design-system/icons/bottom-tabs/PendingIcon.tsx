import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Icon for the Pending tab.
 */
export function PendingIcon(props: SvgProps) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" {...props}>
      <Circle cx={9} cy={9} r={8} stroke="#fff" strokeWidth={1.3} />
      <Path
        d="M13.5 9H9.25A.25.25 0 0 1 9 8.75V5.5"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.3}
      />
    </Svg>
  );
}
