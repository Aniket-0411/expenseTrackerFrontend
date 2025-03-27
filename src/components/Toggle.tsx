import { ComponentType, FC, useMemo } from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageStyle,
  Platform,
  StyleProp,
  SwitchProps,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { isRTL } from '~/i18n';
import { colors, spacing } from '~/theme';

import { iconRegistry, IconTypes } from './Icon';
import { Text, ITextProps } from './Text';

const $inputWrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const $inputOuterBase: ViewStyle = {
  height: 24,
  width: 24,
  borderWidth: 2,
  alignItems: 'center',
  overflow: 'hidden',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'space-between',
  flexDirection: 'row',
};

const $inputOuterVariants: Record<IVariants, StyleProp<ViewStyle>> = {
  checkbox: [$inputOuterBase, { borderRadius: 4 }],
  radio: [$inputOuterBase, { borderRadius: 12 }],
  switch: [$inputOuterBase, { height: 32, width: 56, borderRadius: 16, borderWidth: 0 }],
};

const $checkboxInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const $checkboxDetail: ImageStyle = {
  width: 20,
  height: 20,
  resizeMode: 'contain',
};

const $radioInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const $radioDetail: ViewStyle = {
  width: 12,
  height: 12,
  borderRadius: 6,
};

const $switchInner: ViewStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center',
  borderColor: colors.transparent,
  overflow: 'hidden',
  position: 'absolute',
  paddingStart: 4,
  paddingEnd: 4,
};

const $switchDetail: ISwitchToggleProps['inputDetailStyle'] = {
  borderRadius: 12,
  position: 'absolute',
  width: 24,
  height: 24,
};

const $helper: TextStyle = {
  marginTop: spacing.xs,
};

const $label: TextStyle = {
  flex: 1,
};

const $labelRight: TextStyle = {
  marginStart: spacing.md,
};

const $labelLeft: TextStyle = {
  marginEnd: spacing.md,
};

const $switchAccessibility: TextStyle = {
  width: '40%',
  justifyContent: 'center',
  alignItems: 'center',
};

const $switchAccessibilityIcon: ImageStyle = {
  width: 14,
  height: 14,
  resizeMode: 'contain',
};

const $switchAccessibilityLine: ViewStyle = {
  width: 2,
  height: 12,
};

const $switchAccessibilityCircle: ViewStyle = {
  borderWidth: 2,
  width: 12,
  height: 12,
  borderRadius: 6,
};

type IVariants = 'checkbox' | 'switch' | 'radio';

interface BaseToggleProps extends Omit<TouchableOpacityProps, 'style'> {
  /**
   * The variant of the toggle.
   * Options: "checkbox", "switch", "radio"
   * Default: "checkbox"
   */
  variant?: unknown;
  /**
   * A style modifier for different input states.
   */
  status?: 'error' | 'disabled';
  /**
   * If false, input is not editable. The default value is true.
   */
  isEditable?: TextInputProps['editable'];
  /**
   * The value of the field. If true the component will be turned on.
   */
  isValue?: boolean;
  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: SwitchProps['onValueChange'];
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * Optional input wrapper style override.
   * This gives the inputs their size, shape, "off" background-color, and outer border.
   */
  inputOuterStyle?: ViewStyle;
  /**
   * Optional input style override.
   * This gives the inputs their inner characteristics and "on" background-color.
   */
  inputInnerStyle?: ViewStyle;
  /**
   * The position of the label relative to the action component.
   * Default: right
   */
  labelPosition?: 'left' | 'right';
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: ITextProps['text'];
  /**
   * Label text which is looked up via i18n.
   */
  labelTx?: ITextProps['tx'];
  /**
   * Optional label options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  labelTxOptions?: ITextProps['txOptions'];
  /**
   * Style overrides for label text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: ITextProps;
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: ITextProps['text'];
  /**
   * Helper text which is looked up via i18n.
   */
  helperTx?: ITextProps['tx'];
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  helperTxOptions?: ITextProps['txOptions'];
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: ITextProps;
}

interface ICheckboxToggleProps extends BaseToggleProps {
  variant?: 'checkbox';
  /**
   * Optional style prop that affects the Image component.
   */
  inputDetailStyle?: ImageStyle;
  /**
   * Checkbox-only prop that changes the icon used for the "on" state.
   */
  checkboxIcon?: IconTypes;
}

interface IRadioToggleProps extends BaseToggleProps {
  variant?: 'radio';
  /**
   * Optional style prop that affects the dot View.
   */
  inputDetailStyle?: ViewStyle;
}

interface ISwitchToggleProps extends BaseToggleProps {
  variant?: 'switch';
  /**
   * Switch-only prop that adds a text/icon label for on/off states.
   */
  switchAccessibilityMode?: 'text' | 'icon';
  /**
   * Optional style prop that affects the knob View.
   * Note: `width` and `height` rules should be points (numbers), not percentages.
   */
  inputDetailStyle?: Omit<ViewStyle, 'width' | 'height'> & { width?: number; height?: number };
}

/**
 * -----------------------------------------------------------------------------
 * This renders the switch accessibility label.
 */
function SwitchAccessibilityLabel(props: IToggleInputProps & { role: 'on' | 'off' }) {
  const { isOn, isDisabled, status, switchAccessibilityMode, role, innerStyle, detailStyle } =
    props;

  if (!switchAccessibilityMode) return null;

  const shouldLabelBeVisible = (isOn && role === 'on') || (!isOn && role === 'off');

  const $switchAccessibilityStyle: StyleProp<ViewStyle> = [
    $switchAccessibility,
    role === 'off' && { end: '5%' },
    role === 'on' && { left: '5%' },
  ];

  const color = (function getColor() {
    if (isDisabled) return colors.palette.neutral600;
    if (status === 'error') return colors.error;
    if (!isOn) return innerStyle?.backgroundColor ?? colors.palette.secondary500;
    return detailStyle?.backgroundColor ?? colors.palette.neutral100;
  })();

  return (
    <View style={$switchAccessibilityStyle}>
      {switchAccessibilityMode === 'text' && shouldLabelBeVisible ? (
        <View
          style={[
            role === 'on' && $switchAccessibilityLine,
            role === 'on' && { backgroundColor: color },
            role === 'off' && $switchAccessibilityCircle,
            role === 'off' && { borderColor: color },
          ]}
        />
      ) : null}

      {switchAccessibilityMode === 'icon' && shouldLabelBeVisible ? (
        <Image
          source={role === 'off' ? iconRegistry.hidden : iconRegistry.view}
          style={[$switchAccessibilityIcon, { tintColor: color }]}
        />
      ) : null}
    </View>
  );
}

/**
 * -----------------------------------------------------------------------------
 * Renders a checkbox input.
 */
function Checkbox({
  isOn,
  status,
  isDisabled,
  checkboxIcon,
  outerStyle: $outerStyleOverride,
  innerStyle: $innerStyleOverride,
  detailStyle: $detailStyleOverride,
}: IToggleInputProps) {
  const offBackgroundColor = [
    isDisabled && colors.palette.neutral400,
    status === 'error' && colors.errorBackground,
    colors.palette.neutral200,
  ].filter(Boolean)[0];

  const outerBorderColor = [
    isDisabled && colors.palette.neutral400,
    status === 'error' && colors.error,
    !isOn && colors.palette.neutral800,
    colors.palette.secondary500,
  ].filter(Boolean)[0];

  const onBackgroundColor = [
    isDisabled && colors.transparent,
    status === 'error' && colors.errorBackground,
    colors.palette.secondary500,
  ].filter(Boolean)[0];

  const iconTintColor = [
    isDisabled && colors.palette.neutral600,
    status === 'error' && colors.error,
    colors.palette.accent100,
  ].filter(Boolean)[0];

  return (
    <View
      style={[
        $inputOuterVariants.checkbox,
        { backgroundColor: offBackgroundColor, borderColor: outerBorderColor },
        $outerStyleOverride,
      ]}
    >
      <Animated.View
        style={[
          $checkboxInner,
          { backgroundColor: onBackgroundColor },
          $innerStyleOverride,
          useAnimatedStyle(() => ({ opacity: withTiming(isOn ? 1 : 0) }), [isOn]),
        ]}
      >
        <Image
          source={checkboxIcon ? iconRegistry[checkboxIcon] : iconRegistry.check}
          style={[
            $checkboxDetail,
            !!iconTintColor && { tintColor: iconTintColor },
            $detailStyleOverride,
          ]}
        />
      </Animated.View>
    </View>
  );
}

/**
 * -----------------------------------------------------------------------------
 * This renders a switch input element
 */
function Switch(props: IToggleInputProps) {
  const {
    isOn,
    status,
    isDisabled,
    outerStyle: $outerStyleOverride,
    innerStyle: $innerStyleOverride,
    detailStyle: $detailStyleOverride,
  } = props;

  const knobSizeFallback = 2;

  const knobWidth = [$detailStyleOverride?.width, $switchDetail?.width, knobSizeFallback].find(
    (v) => typeof v === 'number'
  );

  const knobHeight = [$detailStyleOverride?.height, $switchDetail?.height, knobSizeFallback].find(
    (v) => typeof v === 'number'
  );

  const offBackgroundColor = [
    isDisabled && colors.palette.neutral400,
    status === 'error' && colors.errorBackground,
    colors.palette.neutral300,
  ].filter(Boolean)[0];

  const onBackgroundColor = [
    isDisabled && colors.transparent,
    status === 'error' && colors.errorBackground,
    colors.palette.secondary500,
  ].filter(Boolean)[0];

  const knobBackgroundColor = (function knobBgColor() {
    if (isOn) {
      return [
        $detailStyleOverride?.backgroundColor,
        status === 'error' && colors.error,
        isDisabled && colors.palette.neutral600,
        colors.palette.neutral100,
      ].filter(Boolean)[0];
    }
    return [
      $innerStyleOverride?.backgroundColor,
      isDisabled && colors.palette.neutral600,
      status === 'error' && colors.error,
      colors.palette.neutral200,
    ].filter(Boolean)[0];
  })();

  const $animatedSwitchKnob = useAnimatedStyle(() => {
    const offsetLeft = ($innerStyleOverride?.paddingStart ||
      $innerStyleOverride?.paddingLeft ||
      $switchInner?.paddingStart ||
      $switchInner?.paddingLeft ||
      0) as number;

    const offsetRight = ($innerStyleOverride?.paddingEnd ||
      $innerStyleOverride?.paddingRight ||
      $switchInner?.paddingEnd ||
      $switchInner?.paddingRight ||
      0) as number;

    // For RTL support:
    // - web flip input range to [1,0]
    // - outputRange doesn't want rtlAdjustment
    const rtlAdjustment = isRTL ? -1 : 1;
    const inputRangeItems = isRTL ? [1, 0] : [0, 1];
    const inputRange = Platform.OS === 'web' ? inputRangeItems : [0, 1];
    const outputRange =
      Platform.OS === 'web'
        ? [offsetLeft, +(knobWidth || 0) + offsetRight]
        : [rtlAdjustment * offsetLeft, rtlAdjustment * (+(knobWidth || 0) + offsetRight)];

    const translateX = interpolate(isOn ? 1 : 0, inputRange, outputRange, Extrapolation.CLAMP);

    return { transform: [{ translateX: withTiming(translateX) }] };
  }, [isOn, knobWidth]);

  return (
    <View
      style={[
        $inputOuterVariants.switch,
        { backgroundColor: offBackgroundColor },
        $outerStyleOverride,
      ]}
    >
      <Animated.View
        style={[
          $switchInner,
          { backgroundColor: onBackgroundColor },
          $innerStyleOverride,
          useAnimatedStyle(() => ({ opacity: withTiming(isOn ? 1 : 0) }), [isOn]),
        ]}
      />

      {/* eslint-disable-next-line jsx-a11y/aria-role */}
      <SwitchAccessibilityLabel {...props} aria-checked={isOn} role="on" />

      {/* eslint-disable-next-line jsx-a11y/aria-role */}
      <SwitchAccessibilityLabel {...props} aria-checked={isOn} role="off" />

      <Animated.View
        style={[
          $switchDetail,
          $detailStyleOverride,
          $animatedSwitchKnob,
          { width: knobWidth, height: knobHeight },
          { backgroundColor: knobBackgroundColor },
        ]}
      />
    </View>
  );
}

/**
 * -----------------------------------------------------------------------------
 * This renders the base radio component.
 */
function Radio({
  isOn,
  status,
  isDisabled,
  outerStyle: $outerStyleOverride,
  innerStyle: $innerStyleOverride,
  detailStyle: $detailStyleOverride,
}: IToggleInputProps) {
  const offBackgroundColor = [
    isDisabled && colors.palette.neutral400,
    status === 'error' && colors.errorBackground,
    colors.palette.neutral200,
  ].filter(Boolean)[0];

  const outerBorderColor = [
    isDisabled && colors.palette.neutral400,
    status === 'error' && colors.error,
    !isOn && colors.palette.neutral800,
    colors.palette.secondary500,
  ].filter(Boolean)[0];

  const onBackgroundColor = [
    isDisabled && colors.transparent,
    status === 'error' && colors.errorBackground,
    colors.palette.neutral100,
  ].filter(Boolean)[0];

  const dotBackgroundColor = [
    isDisabled && colors.palette.neutral600,
    status === 'error' && colors.error,
    colors.palette.secondary500,
  ].filter(Boolean)[0];

  return (
    <View
      style={[
        $inputOuterVariants.radio,
        { backgroundColor: offBackgroundColor, borderColor: outerBorderColor },
        $outerStyleOverride,
      ]}
    >
      <Animated.View
        style={[
          $radioInner,
          { backgroundColor: onBackgroundColor },
          $innerStyleOverride,
          useAnimatedStyle(() => ({ opacity: withTiming(isOn ? 1 : 0) }), [isOn]),
        ]}
      >
        <View
          style={[$radioDetail, { backgroundColor: dotBackgroundColor }, $detailStyleOverride]}
        />
      </Animated.View>
    </View>
  );
}

interface IToggleInputProps {
  // eslint-disable-next-line react/no-unused-prop-types
  checkboxIcon?: ICheckboxToggleProps['checkboxIcon'];
  detailStyle: Omit<ViewStyle & ImageStyle, 'overflow'>;
  isDisabled: boolean;
  innerStyle: ViewStyle;
  isOn: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  outerStyle: ViewStyle;
  status: BaseToggleProps['status'];
  /**
   * Switch-only prop that adds a text/icon label for on/off states.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  switchAccessibilityMode?: 'text' | 'icon';
}

const ToggleInputs: Record<IVariants, FC<IToggleInputProps>> = {
  checkbox: Checkbox,
  switch: Switch,
  radio: Radio,
};

export type TToggleProps = ICheckboxToggleProps | IRadioToggleProps | ISwitchToggleProps;

/**
 * -----------------------------------------------------------------------------
 * This renders the label for the form input element.
 */
function FieldLabel(props: BaseToggleProps) {
  const {
    status,
    label,
    labelTx,
    labelTxOptions,
    LabelTextProps,
    labelPosition,
    labelStyle: $labelStyleOverride,
  } = props;

  if (!label && !labelTx && !LabelTextProps?.children) return null;

  const $labelStyle = [
    $label,
    status === 'error' && { color: colors.error },
    labelPosition === 'right' && $labelRight,
    labelPosition === 'left' && $labelLeft,
    $labelStyleOverride,
    LabelTextProps?.style,
  ];

  return (
    <Text
      preset="formLabel"
      text={label}
      tx={labelTx}
      txOptions={labelTxOptions}
      {...LabelTextProps}
      style={$labelStyle}
    />
  );
}

/**
 * -----------------------------------------------------------------------------
 * Renders a boolean input.
 * This is a controlled component that requires an onValueChange callback that
 * updates the value prop in order for the component to reflect user actions.
 *
 * If the value prop is not updated, the component will continue to render the
 * supplied value prop instead of the expected result of any user actions.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Toggle/}
 * @param {TToggleProps} props - The props for the `Toggle` component.
 * @returns {JSX.Element} The rendered `Toggle` component.
 */
export function Toggle(props: TToggleProps) {
  const {
    containerStyle: $containerStyleOverride,
    helper,
    HelperTextProps,
    helperTx,
    helperTxOptions,
    inputWrapperStyle: $inputWrapperStyleOverride,
    isEditable = true,
    labelPosition = 'right',
    onPress,
    onValueChange,
    status,
    isValue: value,
    variant = 'checkbox',
    ...WrapperProps
  } = props;

  const { checkboxIcon } = props as ICheckboxToggleProps;

  const isDisabled = isEditable === false || status === 'disabled' || props?.disabled;

  const Wrapper = useMemo(
    () =>
      (isDisabled ? View : TouchableOpacity) as ComponentType<TouchableOpacityProps | ViewProps>,
    [isDisabled]
  );

  const ToggleInput = useMemo(() => ToggleInputs[variant] || (() => null), [variant]);

  const $containerStyles = [$containerStyleOverride];
  const $inputWrapperStyles = [$inputWrapper, $inputWrapperStyleOverride];
  const $helperStyles = [
    $helper,
    status === 'error' && { color: colors.error },
    HelperTextProps?.style,
  ];

  const handlePress = (e: GestureResponderEvent) => {
    if (isDisabled) return;

    onValueChange?.(!value);
    onPress?.(e);
  };

  const { switchAccessibilityMode } = props as ISwitchToggleProps;

  return (
    <Wrapper
      accessibilityRole={variant}
      accessibilityState={{ checked: value, disabled: isDisabled }}
      activeOpacity={1}
      {...WrapperProps}
      onPress={handlePress}
      style={$containerStyles}
    >
      <View style={$inputWrapperStyles}>
        {labelPosition === 'left' && <FieldLabel {...props} labelPosition={labelPosition} />}

        <ToggleInput
          checkboxIcon={checkboxIcon}
          detailStyle={props?.inputDetailStyle ?? {}}
          innerStyle={props?.inputInnerStyle ?? {}}
          isDisabled={!!isDisabled}
          isOn={!!value}
          outerStyle={props?.inputOuterStyle ?? {}}
          status={status}
          switchAccessibilityMode={switchAccessibilityMode}
        />

        {labelPosition === 'right' ? <FieldLabel {...props} labelPosition={labelPosition} /> : null}
      </View>

      {!!(helper ?? helperTx) && (
        <Text
          preset="formHelper"
          text={helper}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </Wrapper>
  );
}
