import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { TThemeColor, useThemeColorKey } from '~/theme';

import { IUseSVGIconOptions } from './types';
import { BASE_STYLE, TIconPresets } from './icon.presets';

type TGetIconColorOptions = Pick<
  IUseSVGIconOptions,
  | 'color'
  | 'colorHasError'
  | 'colorIsActive'
  | 'colorIsDisabled'
  | 'hasError'
  | 'isActive'
  | 'isDisabled'
>;

/**
 * Get the base theme icon colors based on status of the icon
 */
const getIconColorKey = ({
  color,
  colorHasError,
  colorIsActive,
  colorIsDisabled,
  hasError,
  isActive,
  isDisabled,
}: TGetIconColorOptions): TThemeColor => {
  if (isDisabled) return colorIsDisabled || 'actionIconFocused';

  if (isActive) return colorIsActive || 'actionIconFocused';

  if (hasError) return colorHasError || 'actionIconError';

  return color || 'actionIcon';
};

/**
 * This creates the reusable styles for SVG icons.
 */
export function useSVGIconStyles({
  color,
  colorHasError,
  colorIsActive,
  colorIsDisabled,
  fillColor,
  hasError,
  isActive,
  isDisabled,
  solid,
  strokeColor,
  strokeWidth,
}: IUseSVGIconOptions) {
  const colorKey = getIconColorKey({
    color,
    colorHasError,
    colorIsActive,
    colorIsDisabled,
    hasError,
    isActive,
    isDisabled,
  });

  let iconColor: ColorValue = useThemeColorKey(colorKey);

  if (fillColor) {
    iconColor = fillColor;
  } else if (strokeColor) {
    iconColor = strokeColor;
  }

  const baseStyles = {
    ...BASE_STYLE,
    stroke: iconColor,
    strokeWidth: strokeWidth ?? BASE_STYLE.strokeWidth,
  };

  const iconPresets: Record<TIconPresets, SvgProps> = {
    disabled: {
      ...baseStyles,
      opacity: 0.8,
    } as SvgProps,
    normal: baseStyles,
    solid: {
      ...baseStyles,
      fill: iconColor,
    } as SvgProps,
  };

  const styles = solid ? iconPresets.solid : iconPresets.normal;

  return {
    styles,
  };
}
