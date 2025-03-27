import { createContext, ReactNode, useMemo, useState } from 'react';

import { IAppModalContent } from '../types';

import { AppModalContent } from './AppModalContent';

export interface IAppModalContextOptions {
  /**
   * Callback to close the modal
   */
  onCloseModal: (() => void) | null;
  /**
   * Callback to open the modal, whilst all passing the new modal content to render.
   */
  onOpenModal: ((newContent: IAppModalContent) => void) | null;
  /**
   * Boolean to determine if the modal is visible or not
   */
  isAppModalVisible: boolean;
}

/**
 * Provides App Modal/Popup to all underlying child components which can access
 * it deep within the tree for direct updates ad customizations.
 */
export const AppModalContext = createContext<IAppModalContextOptions>({
  onCloseModal: null,
  onOpenModal: null,
  isAppModalVisible: false,
});

interface IAppModalProviderProps {
  children: ReactNode;
}

/**
 * -----------------------------------------------------------------------------
 * Base App Modal Provider of the App that exposes configurable for the app
 */
export function AppModalProvider({ children }: IAppModalProviderProps) {
  // const { CANCEL, OKAY } = appTexts;

  const [isAppModalVisible, setIsAppModalVisible] = useState(false);

  const [content, setContent] = useState<IAppModalContent | null>(null);

  const handleCloseAppModal = () => {
    setIsAppModalVisible(false);
  };

  const handleOpenAppModal = (newContent: IAppModalContent) => {
    setContent(newContent);
    setIsAppModalVisible(true);
  };

  const memoizedValue: IAppModalContextOptions = useMemo(
    () => ({
      onCloseModal: handleCloseAppModal,
      onOpenModal: handleOpenAppModal,
      isAppModalVisible,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [content, isAppModalVisible],
  );

  return (
    <AppModalContext.Provider value={memoizedValue}>
      {children}

      {isAppModalVisible && content ? (
        <AppModalContent
          content={content}
          isAppModalVisible={isAppModalVisible}
          onCloseModal={handleCloseAppModal}
        />
      ) : null}
    </AppModalContext.Provider>
  );
}
