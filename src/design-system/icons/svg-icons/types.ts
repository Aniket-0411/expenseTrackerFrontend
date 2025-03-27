import { ColorValue } from 'react-native';
import { SvgProps, NumberProp } from 'react-native-svg';

import { BoxPropsType, TThemeColor } from '~/theme';

export interface IUseSVGIconOptions {
  fillColor?: ColorValue;
  hasError?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  size?: number;
  color?: TThemeColor;
  colorHasError?: TThemeColor;
  colorIsActive?: TThemeColor;
  colorIsDisabled?: TThemeColor;
  solid?: boolean;
  strokeColor?: ColorValue;
  strokeWidth?: NumberProp;
}

export interface IIconProps extends Omit<SvgProps, 'color'>, IUseSVGIconOptions {
  boxProps?: BoxPropsType;
}

export type TSvgIconElement = (props: IIconProps) => JSX.Element;

export interface ITabIconProps extends Omit<SvgProps, 'color'>, IUseSVGIconOptions {
  isActive: boolean;
}
