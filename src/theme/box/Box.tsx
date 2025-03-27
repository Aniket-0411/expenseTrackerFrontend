import { Animated as RNAnimated } from 'react-native';
import Animated from 'react-native-reanimated';
import { createBox, ResponsiveValue } from '@shopify/restyle';

import { ThemeType } from '../theme';

export type { BoxProps } from '@shopify/restyle';

export type TResponsiveValue =
  | ResponsiveValue<
      'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
      {
        phone: number;
        longPhone: { width: number; height: number };
        tablet: number;
        largeTablet: number;
      }
    >
  | undefined;

/**
 * Create a themed primitives to replace the default React Native `View` components.
 * Allow you to add type safe style props to the View element.
 *
 * `NOTE`: Add tests and more customizations to this file.
 */
export const Box = createBox<ThemeType>();

/**
 * This creates an animated version of the `Box` component, wrapped with
 * inbuilt react-native `Animated` properties.
 *
 * - NOTE: To be replaced by `AnimatedBox` below when the scroll handler for
 * reanimated
 * are fixed in a later version.
 */
export const RNAnimatedBox = RNAnimated.createAnimatedComponent(Box);

/**
 * This creates an animated version of the `Box` component, wrapped with the
 * reanimated `Animated` properties.
 */
export const AnimatedBox = Animated.createAnimatedComponent(Box);
