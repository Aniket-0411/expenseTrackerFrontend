import Svg, { Path } from 'react-native-svg';

interface IEditIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}

/**
 * -------------------------------------------------------------------------
 * A Edit icon.
 */
export function EditIcon({ width = 24, height = 24, fill = '#000', ...props }: IEditIconProps) {
  return (
    <Svg fill="none" height={height} width={width} {...props}>
      <Path
        clipRule="evenodd"
        d="m14.12 6.968 1.797-1.796c.545-.546.818-.818.963-1.112a2 2 0 0 0 0-1.776c-.145-.295-.418-.567-.963-1.112-.546-.546-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.418-1.112.964L10.098 2.99a10.9 10.9 0 0 0 4.023 3.978ZM8.645 4.445l-6.87 6.87c-.426.425-.638.638-.778.899s-.199.556-.317 1.145l-.615 3.077c-.067.333-.1.5-.005.594.094.094.26.061.593-.006l3.077-.615c.59-.118.884-.177 1.145-.316.262-.14.474-.353.9-.778l6.888-6.89a12.903 12.903 0 0 1-4.018-3.98Z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}
