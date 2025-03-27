import { useEffect, useRef } from 'react';
import { Animated, ColorValue, StyleSheet } from 'react-native';

import { getCurrentLocale, translate, TxKeyPath, TTxOptions, TLocalizedText } from '~/i18n';
import { fontFamily, Text } from '~/theme';

interface IFloatingLabelProps {
  color: ColorValue;
  value: string;
  isFocused: boolean;
  valuePrefix?: string;
  label?: TxKeyPath;
  labelTxOptions?: TTxOptions;
  labelLocalized?: TLocalizedText;
  labelPostFix?: TxKeyPath;
  labelPostFixTxOptions?: TTxOptions;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.primaryLight,
    left: 16,
    paddingVertical: 12,
    pointerEvents: 'none',
    position: 'absolute',
  },
});

/**
 * -----------------------------------------------------------------------------
 * This renders a floating label next to an input field that is configured to
 * support animated floating labels.
 */
export function FloatingLabel({
  color,
  value,
  valuePrefix,
  isFocused,
  label,
  labelTxOptions,
  labelLocalized,
  labelPostFix,
  labelPostFixTxOptions,
}: IFloatingLabelProps) {
  const animatedRef = useRef(new Animated.Value(value === '' ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedRef, {
      toValue: isFocused || value !== '' || valuePrefix !== '' ? 1 : 0,
      duration: 200,
      // False to allow font size Animation.
      // TODO: Make true and use a scale transform instead.
      useNativeDriver: false,
    }).start();
  }, [animatedRef, isFocused, value, valuePrefix]);

  const translateY = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  const translateX = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -14],
  });

  const fontSize = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 14],
  });

  const animatedOpacity = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  /**
   * Renders the translated placeholder and label is passed via `tx`
   */
  let i18nLabel = label && translate(label, labelTxOptions);

  /**
   * If localized placeholder and label is provided, we have to pick out the active language
   */
  if (labelLocalized?.en) {
    i18nLabel = labelLocalized[getCurrentLocale()];
  }

  return (
    <Animated.Text
      style={[
        styles.label,
        {
          color,
          fontSize,
          transform: [{ translateX }, { translateY }],
          opacity: animatedOpacity,
        },
      ]}
    >
      {i18nLabel}

      {labelPostFix ? (
        <Text
          color="actionLabel"
          fontSize={13}
          fontStyle="italic"
          opacity={0.75}
          tx={labelPostFix}
          txOptions={labelPostFixTxOptions}
        />
      ) : null}
    </Animated.Text>
  );
}
