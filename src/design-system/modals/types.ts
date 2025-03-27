import { ReactNode } from 'react';

import { TxKeyPath, TTxOptions } from '~/i18n';

export interface IModalFooterActionType {
  /**
   * Function called by the footer button when pressed.
   */
  callback?: () => void;
  /**
   * The translated
   */
  label: TxKeyPath;
}

export interface IAppModalContent {
  title?: TxKeyPath;
  subtitle?: TxKeyPath;
  subtitleTxOptions?: TTxOptions;
  isLoading?: boolean;
  isDismissible?: boolean;
  isDismissibleByBackdrop?: boolean;
  modalChildren?: ReactNode;
  modalError?: ReactNode;
  /**
   * Callback called when the user presses on the cancel action of the modal footer
   */
  cancelAction?: IModalFooterActionType;
  /**
   * Callback called when the user presses on the okay action of the modal footer
   */
  okayAction?: IModalFooterActionType;
}
