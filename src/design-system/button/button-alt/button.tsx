import { ComponentProps } from 'react';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';

import { Box, ThemeType } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * This provides a themed wrapper around the Native View component, that will be
 * used to wrap the custom button component.
 *
 * This will feed the underlying button with themed `buttonVariants` props.
 *
 * `NOTE`: Add tests and more customizations to this file.
 */
export const ButtonThemed = createRestyleComponent<
  VariantProps<ThemeType, 'buttonVariants'> & ComponentProps<typeof Box>,
  ThemeType
>([createVariant({ themeKey: 'buttonVariants' })], Box);
