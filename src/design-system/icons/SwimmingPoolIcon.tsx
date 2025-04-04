import Svg, { Path } from 'react-native-svg';

interface ISwimmingPoolIconProps {
  // fill?: string;
  // height?: number;
  // stroke?: string;
  width?: number;
}

/**
 * ------------------------------------------------------------------------------------------
 * A swimming pool icon.
 */
export function SwimmingPoolIcon({
  // fill,
  // height = 20,
  // stroke,
  width = 20,
  ...props
}: ISwimmingPoolIconProps) {
  return (
    <Svg fill="none" height={width} width={width} {...props}>
      <Path
        d="M2.94 1.174a2.356 2.356 0 0 1 2.354 2.353v8.823a.588.588 0 1 0 1.176 0V9.41h7.059v2.94a.588.588 0 0 0 1.177 0V3.527a3.533 3.533 0 0 0-3.53-3.53.588.588 0 1 0 0 1.177 2.356 2.356 0 0 1 2.353 2.353v1.176H6.47V3.527a3.533 3.533 0 0 0-3.53-3.53.588.588 0 1 0 0 1.177ZM13.53 5.88v2.353H6.47V5.88h7.059Z"
        fill="#000"
      />
      <Path
        d="M.588 14.115c.467-.007.921.151 1.282.447l1.38 1.177a3.21 3.21 0 0 0 4.09 0l1.378-1.177a2.071 2.071 0 0 1 2.564 0l1.379 1.177a3.212 3.212 0 0 0 4.09 0l1.379-1.176c.36-.296.815-.455 1.282-.448a.588.588 0 0 0 0-1.176 3.14 3.14 0 0 0-2.045.73l-1.379 1.176a2.07 2.07 0 0 1-2.564 0l-1.379-1.177a3.21 3.21 0 0 0-4.09 0l-1.379 1.177a2.071 2.071 0 0 1-2.564 0l-1.379-1.178a3.145 3.145 0 0 0-2.045-.728.588.588 0 0 0 0 1.176Z"
        fill="#000"
      />
      <Path
        d="M19.412 16.468a3.132 3.132 0 0 0-2.045.73l-1.379 1.175a2.074 2.074 0 0 1-2.564.001l-1.379-1.176a3.21 3.21 0 0 0-4.09 0l-1.379 1.175a2.074 2.074 0 0 1-2.564.001l-1.378-1.176a3.136 3.136 0 0 0-2.046-.73.588.588 0 0 0 0 1.177c.467-.008.922.15 1.282.447l1.38 1.177a3.22 3.22 0 0 0 4.09 0l1.378-1.177a2.071 2.071 0 0 1 2.564 0l1.379 1.177a3.217 3.217 0 0 0 4.09 0l1.38-1.177c.36-.297.814-.455 1.28-.447a.588.588 0 0 0 0-1.177Z"
        fill="#000"
      />
    </Svg>
  );
}
