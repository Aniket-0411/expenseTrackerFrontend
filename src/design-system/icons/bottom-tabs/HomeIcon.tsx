import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Icon for the Home tab.
 */
export function HomeIcon(props: SvgProps) {
  const { color } = props;

  return (
    <Svg fill="none" {...props}>
      <Path
        d="M1 8.646c0-1.33 0-1.995.294-2.579.294-.584.846-1.017 1.95-1.882l1.072-.84C6.313 1.783 7.311 1 8.5 1s2.187.782 4.184 2.346l1.071.839c1.105.865 1.657 1.298 1.95 1.882.295.584.295 1.25.295 2.579v4.152c0 1.846 0 2.77-.628 3.343-.627.573-1.637.573-3.658.573H5.286c-2.02 0-3.03 0-3.658-.573C1 15.567 1 14.644 1 12.798V8.646Z"
        stroke={color}
        strokeWidth={1}
      />
      <Path
        d="M11 16.714V12a1 1 0 0 0-1-1H7.716a1 1 0 0 0-1 1v4.714"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </Svg>
  );
}
