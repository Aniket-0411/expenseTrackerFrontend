import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `BookAmenitiesIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function BookAmenitiesIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={19} viewBox="0 0 20 19" width={20} {...props}>
      <Path
        d="M7.047 3.636a2.953 2.953 0 105.905 0 2.953 2.953 0 00-5.905 0h0zM2.557 11.413a2.953 2.953 0 102.953 5.115 2.953 2.953 0 00-2.953-5.115h0zM17.442 11.413a2.954 2.954 0 01-.712 5.41 2.95 2.95 0 01-3.616-2.089 2.952 2.952 0 014.328-3.321h0z"
        stroke="#B61D22"
        strokeWidth={1.2}
      />
      <Path
        clipRule="evenodd"
        d="M7.056 3.875a2.951 2.951 0 01.216-1.368l.001-.004a8.475 8.475 0 00-5.585 9.673l.002-.003a2.953 2.953 0 011.078-.87 7.274 7.274 0 014.288-7.428zm5.887 0a7.274 7.274 0 014.29 7.428 2.977 2.977 0 011.076.87c0 .002.002.003.003.004a8.476 8.476 0 00-5.586-9.674l.001.004a2.952 2.952 0 01.216 1.367zm2.643 13.024h-.005a2.954 2.954 0 01-1.292-.498 7.277 7.277 0 01-8.579 0 2.954 2.954 0 01-1.292.497h-.003a8.473 8.473 0 0011.17 0z"
        fill="#B61D22"
        fillRule="evenodd"
      />
    </Svg>
  );
}
