import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type TIconPresets = 'disabled' | 'solid' | 'normal';

interface IBaseIconColors {
  active: ColorValue;
  active50: ColorValue;
  disabled: ColorValue;
  normal: ColorValue;
}

/**
 * Base styled used for all the icons.
 */
export const BASE_COLOR_STYLE: IBaseIconColors = {
  active: '#8833e2',
  active50: '#8833e2ab',
  disabled: '#bfbfbf',
  normal: '#000',
};

/**
 * Base styled used for all the icons.
 */
export const BASE_COLOR_STYLE_DARK: IBaseIconColors = {
  active: '#d8b4fe',
  active50: '#d8b4feab',
  disabled: '#ffffff',
  normal: '#ffffff',
};

/**
 * Base styled used for all the icons.
 */
export const BASE_STYLE: SvgProps = {
  fill: 'none',
  strokeWidth: 1.5,
  opacity: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
