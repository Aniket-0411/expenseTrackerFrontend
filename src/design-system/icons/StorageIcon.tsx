import Svg, { Path } from 'react-native-svg';

interface IStorageIconProps {
  // fill?: string;
  height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * ---------------------------------------------------------------------------------------------
 * A storage icon.
 */
export function StorageIcon({
  // fill,
  height = 20,
  // stroke,
  width = 19,
  ...props
}: IStorageIconProps) {
  return (
    <Svg fill="none" height={height} width={width} {...props}>
      <Path
        d="M1.615 16.233V13.73h15.77v2.525a2.177 2.177 0 0 1-2.026 2.17v-.018H3.791a2.176 2.176 0 0 1-2.176-2.175ZM15.21.803H3.791A2.94 2.94 0 0 0 .85 3.745v12.512a2.94 2.94 0 0 0 2.94 2.94h11.42a2.94 2.94 0 0 0 2.94-2.94V3.744a2.94 2.94 0 0 0-2.94-2.94Zm2.176 12.163H1.615V7.662h15.77v5.304Zm0-6.093H1.615V3.744A2.176 2.176 0 0 1 3.791 1.57h11.418a2.176 2.176 0 0 1 2.176 2.175v3.13Z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.3}
      />
      <Path
        d="M6.023 3.85H4.744a.383.383 0 1 0 0 .765h1.28a.383.383 0 0 0 0-.765ZM4.744 10.685h1.28a.383.383 0 0 0 0-.765h-1.28a.382.382 0 1 0 0 .765ZM6.023 15.687H4.744a.382.382 0 1 0 0 .766h1.28a.383.383 0 0 0 0-.766Z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.3}
      />
    </Svg>
  );
}
