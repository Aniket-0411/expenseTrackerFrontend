import { ReactNode } from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { isAndroid } from '~/utils';

interface IPressableProps extends PressableProps {
  children: ReactNode;
  pressOpacity?: number;
}

interface IStylesFromPressableOptions {
  pressed: boolean;
}

interface IUpdatePressedStyleOptions {
  pressOpacity: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Customizes the styles of the pressable container when pressed.
 */
function updatePressedStyle({ pressOpacity, style }: IUpdatePressedStyleOptions) {
  return function stylesFromPressable({ pressed }: IStylesFromPressableOptions) {
    return [style, { opacity: pressed ? pressOpacity : 1 }];
  };
}

/**
 * -----------------------------------------------------------------------------
 * Customizes the pressable to add opacity when an item is pressed.
 */
export function Pressable({ children, pressOpacity = 0.45, style, ...rest }: IPressableProps) {
  if (isAndroid) {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        role="button"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={style}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <RNPressable
      accessibilityRole="button"
      hitSlop={{
        top: 8,
        left: 8,
        bottom: 8,
        right: 8,
      }}
      role="button"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={updatePressedStyle({ pressOpacity, style })}
      {...rest}
    >
      {children}
    </RNPressable>
  );
}
