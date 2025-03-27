import Svg, { Path } from 'react-native-svg';

interface IAuditoriumIconProps {
  // fill?: string;
  height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * ----------------------------------------------------------------------------
 * A react-native-svg icon component representing an auditorium.
 */
export function FinancialRequestIcon({
  // fill,
  height = 28,
  // stroke,
  width = 24,
  ...props
}: IAuditoriumIconProps) {
  return (
    <Svg fill="none" height={height} width={width} {...props}>
      <Svg fill="none" height={28} width={24} {...props}>
        <Path
          d="M16.78 26.313H.986V6.925h9.498v-.987H0V27.3h17.766V13.094h-.987v13.219Z"
          fill="#B61F24"
        />
        <Path
          d="M14.645 12.93H3.12v.986h11.525v-.986Zm0 4.074H3.12v.987h11.525v-.987Zm0 4.074H3.12v.987h11.525v-.987Zm3.083-15.426c-.782-.323-.782-.447-.782-.568 0-.191.172-.301.47-.301.447 0 .729.16.849.23l.428.244.511-1.348-.307-.18a2.503 2.503 0 0 0-.883-.313v-.853H16.65V3.5c-.786.256-1.268.89-1.268 1.683 0 1.061.882 1.543 1.65 1.844.685.278.685.494.685.61 0 .243-.226.401-.578.401a1.83 1.83 0 0 1-.977-.29l-.448-.3-.49 1.37.26.186c.274.197.68.347 1.107.412v.885h1.372v-.966c.811-.267 1.327-.944 1.327-1.758 0-1.156-.892-1.653-1.562-1.926Z"
          fill="#B61F24"
        />
        <Path
          d="M17.273 0a6.44 6.44 0 0 0-6.432 6.432 6.439 6.439 0 0 0 6.432 6.432 6.44 6.44 0 0 0 6.433-6.432A6.44 6.44 0 0 0 17.273 0Zm0 11.877a5.451 5.451 0 0 1-5.445-5.445A5.451 5.451 0 0 1 17.273.987a5.452 5.452 0 0 1 5.446 5.445 5.452 5.452 0 0 1-5.446 5.445Z"
          fill="#B61F24"
        />
      </Svg>
    </Svg>
  );
}
