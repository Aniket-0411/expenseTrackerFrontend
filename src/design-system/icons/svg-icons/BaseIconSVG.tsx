import { ReactNode } from 'react';
import Svg, { SvgProps } from 'react-native-svg';

import { Box } from '~/theme';

import { IIconProps } from './types';
import { useSVGIconStyles } from './useSVGIconStyles';

type TBaseIconSVGProps = Omit<IIconProps, 'children'> & {
  children: (iconStyles: SvgProps) => ReactNode;
};

/**
 * -----------------------------------------------------------------------------
 * This is the underlying base icon over which all other icons are built
 */
export function BaseIconSVG(props: TBaseIconSVGProps) {
  const {
    boxProps,
    children,
    color,
    colorHasError,
    colorIsActive,
    colorIsDisabled,
    hasError,
    isDisabled,
    fillColor,
    isActive,
    size = 24,
    solid,
    strokeColor,
    strokeWidth,
    ...rest
  } = props;

  const { styles } = useSVGIconStyles({
    color,
    colorHasError,
    colorIsActive,
    colorIsDisabled,
    hasError,
    isDisabled,
    isActive,
    fillColor,
    strokeColor,
    strokeWidth,
    solid: isActive || solid,
  });

  return (
    <Box height={size} width={size} {...boxProps}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Svg style={{ flexShrink: 0 }} viewBox="0 0 24 24" {...rest}>
        {children(styles)}
      </Svg>
    </Box>
  );
}
