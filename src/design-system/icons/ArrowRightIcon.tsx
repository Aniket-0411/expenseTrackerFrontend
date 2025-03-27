import Svg, { Path } from 'react-native-svg';

/**
 * TArrowRightIconProps is type for the ArrowRightIcon props.
 */
type TArrowRightIconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

/**
 * -----------------------------------------------------------------------------
 * A right arrow icon.
 */
export function ArrowRightIcon({
  width = 20,
  height = 20,
  fill = '#B61D22',
}: TArrowRightIconProps) {
  return (
    <Svg fill={fill} height={height} width={width}>
      <Path
        d="m13 5 .354-.354.353.354-.353.354L13 5ZM1 5.5a.5.5 0 0 1 0-1v1ZM9.354.646l4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM13 5.5H1v-1h12v1Z"
        fill="#B61F24"
      />
    </Svg>
  );
}

export default ArrowRightIcon;
