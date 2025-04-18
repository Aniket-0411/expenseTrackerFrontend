import Svg, { Path } from 'react-native-svg';

interface IRatingIconProps {
  height?: number;
  width?: number;
  isActive?: boolean;
}

/**
 * ---------------------------------------------------------------------------------------------
 * A Rating icon.
 */
export function RatingIcon({
  height = 22,
  width = 20,
  isActive = false,
  ...props
}: IRatingIconProps) {
  // Define color based on active state
  const fillColor = isActive ? '#FFD700' : 'none'; // Gold color if active, else no fill
  const strokeColor = isActive ? '#FFD700' : '#B61D22'; // Gold if active, default red if not

  return (
    <Svg fill={fillColor} height={height} width={width} {...props} viewBox="0 0 55 54">
      <Path
        d="M21.797 10.157C24.214 4.052 25.422 1 27.5 1c2.078 0 3.286 3.052 5.703 9.157l.112.284c1.366 3.449 2.048 5.173 3.44 6.221 1.39 1.048 3.217 1.214 6.87 1.545l.66.06c5.978.543 8.967.814 9.607 2.74.64 1.927-1.58 3.974-6.02 8.066L46.39 30.44c-2.247 2.072-3.37 3.108-3.894 4.465a6.281 6.281 0 0 0-.244.777c-.344 1.415-.015 2.918.643 5.924l.205.935c1.21 5.523 1.814 8.285.758 9.476a3.067 3.067 0 0 1-1.476.923c-1.525.422-3.69-1.365-8.018-4.94-2.842-2.346-4.263-3.52-5.895-3.783a6.067 6.067 0 0 0-1.938 0c-1.631.264-3.053 1.437-5.895 3.784-4.329 3.574-6.493 5.36-8.018 4.94a3.067 3.067 0 0 1-1.476-.924c-1.056-1.191-.452-3.953.758-9.476l.205-.935c.658-3.006.987-4.509.643-5.924a6.281 6.281 0 0 0-.244-.777c-.523-1.357-1.647-2.393-3.894-4.465l-1.482-1.366c-4.44-4.092-6.66-6.139-6.02-8.065.64-1.927 3.629-2.198 9.607-2.74l.66-.06c3.653-.332 5.48-.498 6.87-1.546 1.392-1.048 2.074-2.772 3.44-6.221l.112-.284Z"
        stroke={strokeColor}
      />
    </Svg>
  );
}
