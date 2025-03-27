import { Box } from '~/theme';

import { CheckIcon } from '../../../icons';

interface IRadioIndicatorProps {
  isActive: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This shows a check mark indicator visual that is styled looks like a checkbox
 * input.
 * - Use this in places where you need to show an empty or selected state for a
 * checkbox for cases showing multiple options.
 * - Note: This is not to be confused with the `CheckInputElement` component, or
 * the checkbox button form component.
 */
export function CheckBoxIndicator({ isActive }: IRadioIndicatorProps) {
  return (
    <Box justifyContent="center">
      <Box
        bg="actionIconBackground"
        borderColor="actionIconForeground"
        borderRadius="xxs"
        borderWidth={1}
        height={24}
        width={24}
      />

      <Box
        alignItems="center"
        borderColor="actionLabel"
        borderRadius="xxs"
        borderWidth={isActive ? 1 : 0}
        height={24}
        justifyContent="center"
        position="absolute"
        width={24}
      >
        {isActive ? (
          <CheckIcon boxProps={{ px: 'xs' }} color="danger" size={24} strokeWidth={2} />
        ) : null}
      </Box>
    </Box>
  );
}
