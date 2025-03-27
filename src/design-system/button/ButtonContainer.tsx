import { ReactNode } from 'react';

import { Box, BoxPropsType } from '~/theme';

interface IButtonBaseProps extends BoxPropsType {
  children: ReactNode;
  isDisabled?: boolean;
  isOutline?: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * The underlying container that provides properties to the button.
 */
export function ButtonContainer({ children, isDisabled, isOutline, ...rest }: IButtonBaseProps) {
  return (
    <Box flexDirection="row" opacity={isDisabled ? 0.45 : 1} {...rest}>
      {children}
    </Box>
  );
}
