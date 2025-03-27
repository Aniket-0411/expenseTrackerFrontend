import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `AccessCardIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function AccessCardIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={19} viewBox="0 0 26 19" width={26} {...props}>
      <Path
        d="M1 3.898c0-1.025 0-1.538.203-1.928a1.8 1.8 0 01.767-.767C2.36 1 2.873 1 3.898 1h18.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 01.767.767c.203.39.203.903.203 1.928v11.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 01-.767.767c-.39.203-.903.203-1.928.203H3.898c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 01-.767-.767C1 16.64 1 16.127 1 15.102V3.898z"
        stroke="#B61D22"
        strokeWidth={1.2}
      />
      <Path d="M1 7h24" stroke="#B61D22" strokeLinecap="round" strokeWidth={1.2} />
    </Svg>
  );
}
