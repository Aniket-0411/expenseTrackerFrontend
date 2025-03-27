import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/**
 * This  component is a React Native Svg component that represents the icon: `MoveInOutIcon`
 *
 * @param SvgProps
 * @returns JSX.Element
 */
export function MoveInOutIcon(props: SvgProps) {
  return (
    <Svg fill="none" height={22} viewBox="0 0 21 22" width={21} {...props}>
      <Path d="M2.929 18.071a10 10 0 100-14.142" stroke="#B61D22" strokeWidth={1.2} />
      <Path
        d="M13 11l.469-.375.3.375-.3.375L13 11zm-12 .6a.6.6 0 110-1.2v1.2zm8.469-5.975l4 5-.938.75-4-5 .938-.75zm4 5.75l-4 5-.938-.75 4-5 .938.75zM13 11.6H1v-1.2h12v1.2z"
        fill="#B61D22"
      />
    </Svg>
  );
}
