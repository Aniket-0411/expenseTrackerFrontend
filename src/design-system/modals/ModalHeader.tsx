import { Box, Text } from '~/theme';

import { ModalCloseButton } from './ModalCloseButton';

interface IModalHeaderProps {
  title: string;
  onCloseModal: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * Renders the Modal Header
 */
export function ModalHeader({ title, onCloseModal }: IModalHeaderProps) {
  return (
    <Box borderBottomColor="modalBorder" borderBottomWidth={1} mb="s" pb="s" pt="xl">
      <ModalCloseButton onClose={onCloseModal} />

      <Text mb="m" pl="l" variant="modalHeader">
        {title}
      </Text>
    </Box>
  );
}
