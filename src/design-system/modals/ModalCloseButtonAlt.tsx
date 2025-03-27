import { Box, BoxPropsType } from '~/theme';

import { XMarkIcon } from '../icons';

interface IModalCloseButtonProps extends BoxPropsType {
  onClose(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Dismisses the Sort Modal when clicked
 */
export function ModalCloseButtonAlt({ onClose }: IModalCloseButtonProps) {
  return (
    <Box marginRight="l" marginTop="l" position="absolute" right={0} top={0} zIndex={2}>
      <XMarkIcon onPress={onClose} opacity={0.5} />
    </Box>
  );
}
