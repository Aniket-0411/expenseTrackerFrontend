import { ReactNode } from 'react';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';

import { ThemeType } from '../theme';
import { Box, BoxProps } from '../box';

type TCardBoxProps = VariantProps<ThemeType, 'cardVariants', 'variant'> &
  BoxProps<ThemeType> & {
    children: ReactNode;
  };

/**
 * This provides a themed wrapper around the Native View component, that will be
 * used to wrap the custom card component.
 *
 * `NOTE`: Add tests and more customizations to this file.
 */
export const CardBox = createRestyleComponent<TCardBoxProps, ThemeType>(
  [createVariant({ themeKey: 'cardVariants' })],
  Box
);
