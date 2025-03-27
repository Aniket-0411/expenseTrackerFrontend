import { Box } from '~/theme';

interface IRadioIndicatorProps {
  isActive: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This shows a radio indicator visual that is styled looks like a radio button.
 * - Use this in places where you need to show an empty or selected state for a
 * radio button.
 * - Note: This is not to be confused with the `CheckboxIndicator` component, or
 * the radio button form component.
 */
export function RadioIndicator({ isActive }: IRadioIndicatorProps) {
  return (
    <Box justifyContent="center">
      <Box
        bg="actionIconBackground"
        borderColor={isActive ? 'actionIconForeground' : 'inputDisabled'}
        borderRadius="xl"
        borderWidth={1}
        height={24}
        opacity={isActive ? 1 : 0.75}
        width={24}
      />

      <Box
        alignItems="center"
        borderRadius="xl"
        height={24}
        justifyContent="center"
        position="absolute"
        width={24}
      >
        <Box
          bg={isActive ? 'actionLabel' : 'inputBackgroundFocused'}
          borderRadius="xl"
          height={12}
          width={12}
        />
      </Box>
    </Box>
  );
}
