import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface ITextInputLabelFloatingProps {
  isFocused: boolean;
  value: string;
  valuePrefix: string;
}

const styles = StyleSheet.create({
  spacer: {
    height: 0,
    pointerEvents: 'none',
  },
});

/**
 * -----------------------------------------------------------------------------
 * This renders an animated free space in the section where the floating label
 * will be applied.
 */
export function TextInputLabelFloatingSpacer({
  value,
  valuePrefix,
  isFocused,
}: ITextInputLabelFloatingProps) {
  const animatedRef = useRef(new Animated.Value(value === '' ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedRef, {
      toValue: isFocused || value !== '' || valuePrefix !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedRef, isFocused, value, valuePrefix]);

  const animatedHeight = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  return (
    <Animated.View
      style={[
        styles.spacer,
        {
          height: animatedHeight,
        },
      ]}
    />
  );
}
