import { Box, Text } from '~/theme';

import { Button } from '../../button';

import { ModalLoader } from '../ModalLoader';
import { IAppModalContent } from '../types';

import { AppModalPopup } from './AppModalPopup';

interface IAppModalContentProps {
  /**
   * The content to render in the modal popup.
   */
  content: IAppModalContent;
  isAppModalVisible: boolean;
  onCloseModal: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * This component renders the content of the modal popup.
 */
export function AppModalContent({
  content,
  onCloseModal,
  isAppModalVisible,
}: IAppModalContentProps) {
  const {
    subtitle,
    subtitleTxOptions,
    isDismissible,
    isDismissibleByBackdrop,
    title,
    modalChildren,
    modalError,
    isLoading,
    cancelAction,
    okayAction,
  } = content;

  const handleCloseAppModal = () => {
    onCloseModal();
  };

  const handleModalCancel = () => {
    onCloseModal();
    content.cancelAction?.callback?.();
  };

  const handleModalOkay = () => {
    handleCloseAppModal();
    okayAction?.callback?.();
  };

  return (
    <AppModalPopup
      isDismissible={isDismissible}
      isDismissibleByBackdrop={isDismissibleByBackdrop}
      isVisible={isAppModalVisible}
      onCloseModal={handleCloseAppModal}
      subtitle={subtitle}
      subtitleTxOptions={subtitleTxOptions}
      title={title}
    >
      {modalError ||
        (isLoading ? (
          <ModalLoader />
        ) : (
          <>
            {modalChildren}

            {cancelAction || okayAction ? (
              <Box flexDirection="row" justifyContent="space-between" pt="s">
                {cancelAction ? (
                  <Button
                    // TODO: Update the modal borderless buttons styles
                    // variant="borderless"
                    onPress={handleModalCancel}
                    py="xs"
                  >
                    <Text tx={cancelAction.label || 'common.cancel'} />
                  </Button>
                ) : null}

                {okayAction ? (
                  <Button
                    // TODO: Update the modal primary buttons styles
                    // variant="primary"
                    onPress={handleModalOkay}
                    py="s"
                  >
                    <Text tx={okayAction.label || 'common.ok'} />
                  </Button>
                ) : null}
              </Box>
            ) : null}
          </>
        ))}
    </AppModalPopup>
  );
}
