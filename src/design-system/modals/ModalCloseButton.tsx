import { Pressable } from 'react-native';

import { Box, BoxPropsType } from '~/theme';

import { XMarkIcon } from '../icons';

interface IModalCloseButtonProps extends BoxPropsType {
  opacity?: number;
  onClose(): void;
}

/**
 * Customizes the styles of the pressable container when pressed.
 */
function updatePressedStyle({ pressed }: { pressed: boolean }) {
  return [{ opacity: pressed ? 0.45 : 1 }];
}
/**
 * -----------------------------------------------------------------------------
 * Action Icon button that closes the Modal on tap.
 */
export function ModalCloseButton({ onClose, ...rest }: IModalCloseButtonProps) {
  return (
    <Box me="none" position="absolute" right={12} top={4} {...rest}>
      <Pressable
        hitSlop={{
          top: 8,
          left: 8,
          bottom: 8,
          right: 8,
        }}
        onPress={onClose}
        style={updatePressedStyle}
      >
        <Box bg="actionIconBackground" borderRadius="m" p="s">
          <XMarkIcon color="actionIconForeground" opacity={0.75} size={20} strokeWidth={2} />
        </Box>
      </Pressable>
    </Box>
  );
}
