import { Box } from '~/theme';

import { XMarkIcon } from '../../../icons';

interface ModalCloseButtonProps {
  onClose(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Action Icon button that closes the Modal on tap.
 */
export function ModalCloseButton({ onClose }: ModalCloseButtonProps) {
  return (
    <Box pointerEvents="box-only" position="absolute" right={0} top={-24}>
      <XMarkIcon
        boxProps={{
          paddingHorizontal: 'l',
          paddingVertical: 'l',
        }}
        onPress={onClose}
        opacity={0.5}
      />
    </Box>
  );
}
