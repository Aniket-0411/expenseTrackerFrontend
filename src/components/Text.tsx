import { ReactNode } from 'react';
import i18n from 'i18n-js';
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

import { isRTL, translate, TxKeyPath } from '~/i18n';
import { colors } from '~/theme';

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

// const $fontWeightStyles = Object.entries(typography.primary).reduce(
//   (acc, [weight, fontFamily]) => ({ ...acc, [weight]: { fontFamily } }),
//   {}
// ) as Record<Weights, TextStyle>;

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  // $fontWeightStyles.normal,
  { color: colors.text },
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg] as StyleProp<TextStyle>,

  formLabel: [$baseStyle] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm] as StyleProp<TextStyle>,
};

const $rtlStyle: TextStyle = isRTL ? { writingDirection: 'rtl' } : {};

type Sizes = keyof typeof $sizeStyles;
// type Weights = keyof typeof typography.primary;
type Presets = keyof typeof $presets;

export type TTxOptions = i18n.TranslateOptions;

export interface ITextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TTxOptions;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  // weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @deprecated
 */
export function Text(props: ITextProps) {
  const { size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props;
  const preset: Presets = props?.preset ?? 'default';

  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText ?? text ?? children;

  const $styles: StyleProp<TextStyle> = [
    $rtlStyle,
    $presets[preset],
    // weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}
