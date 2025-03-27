import { ReactNode } from 'react';
import { Modal, StyleSheet } from 'react-native';

import { Box } from '~/theme';
import { Pressable, XMarkIcon } from '~/design-system';

interface ICustomModal {
  /**
   * children the custom content passed to the modal
   */
  children: ReactNode;
  /**
   * Where the modal will have a close button to dismiss it.
   */
  hasCloseButton?: boolean;
  /**
   * If the modal can be dragged around to dismiss it.
   */
  isDraggable?: boolean;
  /**
   * modalClose the function to be called  to close the modal
   */
  onCloseModal: () => void;
  /**
   * isModalOpen the boolean to check if the modal is open or closed
   */
  modalVisibility: boolean;
}

/**------------------------------------------------------------------------------
 * AppModal is a reusable component that can be used to display a modal with
 */
export function AppModal({
  children,
  hasCloseButton,
  isDraggable = false,
  onCloseModal,
  modalVisibility,
}: ICustomModal) {
  return (
    <Box alignItems="flex-end" flex={1} justifyContent="flex-end">
      <Modal
        animationType="slide"
        onRequestClose={onCloseModal}
        transparent
        visible={modalVisibility}
      >
        <Box
          bg="buttonPrimaryBackground"
          opacity={0.8}
          style={{ ...StyleSheet.absoluteFillObject }}
        />

        {hasCloseButton ? (
          <Box end={24} position="absolute" top={42}>
            <Pressable onPress={onCloseModal}>
              <Box
                bg="buttonSecondaryBackground"
                borderColor="modalBackground"
                borderRadius="xl"
                borderWidth={1}
                opacity={0.8}
                p="s"
              >
                <XMarkIcon size={20} />
              </Box>
            </Pressable>
          </Box>
        ) : null}

        <Box
          alignItems="center"
          backgroundColor="modalBackground"
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          bottom={0}
          elevation={5}
          justifyContent="flex-end"
          p="xl"
          position="absolute"
          shadowColor="modalBorder"
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.25}
          shadowRadius={4}
          width="100%"
        >
          {children}

          {isDraggable ? (
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              pointerEvents="none"
              position="absolute"
              top={8}
              width="100%"
            >
              <Box
                alignItems="center"
                bg="modalBorder"
                borderRadius="xl"
                flexDirection="row"
                height={4}
                justifyContent="center"
                width={80}
              />
            </Box>
          ) : null}
        </Box>
      </Modal>
    </Box>
  );
}
