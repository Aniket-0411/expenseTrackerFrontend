import Svg, { SvgProps, Path } from 'react-native-svg';

/**
 * -----------------------------------------------------------------------------
 * Icon for the Favorite bottom tab.
 */
export function FavoriteIcon(props: SvgProps) {
  return (
    <Svg fill="none" {...props}>
      <Path
        d="m2.591 10.538 7.28 6.869c.27.254.404.381.566.402a.501.501 0 0 0 .126 0c.162-.02.296-.148.566-.402l7.28-6.869a5.45 5.45 0 0 0 .573-7.295l-.336-.435C16.591.148 12.452.593 11.01 3.63a.563.563 0 0 1-1.018 0C8.548.593 4.41.148 2.354 2.81l-.336.434a5.45 5.45 0 0 0 .573 7.295Z"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.3}
      />
    </Svg>
  );
}
