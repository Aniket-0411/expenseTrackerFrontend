import { ReactNode } from 'react';
import { ModalCheckIcon, Button } from '~/design-system';
import { TTxOptions, TxKeyPath } from '~/i18n';
import { Box, Text } from '~/theme';

import styles from './styles';

/**
 * This is the interface for the SubmittedSuccessfullyContentModal modal content
 * component.
 */
interface ISubmittedSuccessfullyContentModalProps {
  /**
   * Custom component to render between the text and CTA content
   */
  children?: ReactNode;
  /**
   * A custom label to be displayed as the modal CTA.
   */
  ctaLabel?: TxKeyPath;
  /**
   * A custom description to be displayed as the modal description.
   */
  description?: string;
  /**
   * A custom description to be displayed as the modal description with translations
   * support.
   */
  descriptionTx?: TxKeyPath;
  /**
   * The custom variable args to pass down to the translations.
   */
  descriptionTxOptions?: TTxOptions;
  /**
   * A custom message to be displayed as the modal title.
   */
  message?: string;
  /**
   * A function that will be called when the Done button is pressed to handle
   * modal visibility.
   */
  openModal: () => void;
  title?: TxKeyPath;
}

/**
 * -----------------------------------------------------------------------------
 * A modal content component that displays a success message and description.
 */
export function SubmittedSuccessfullyContentModal({
  children,
  ctaLabel,
  description,
  descriptionTx,
  descriptionTxOptions,
  message,
  openModal,
  title,
}: ISubmittedSuccessfullyContentModalProps) {
  return (
    <Box style={styles.$modalContentContainer}>
      <ModalCheckIcon />
      <Box>
        {title ? <Text style={styles.$modalMessage} tx={title} /> : null}
        {message ? <Text style={styles.$modalMessage}>{message}</Text> : null}

        {description ? <Text style={styles.$modalMessageDescription}>{description}</Text> : null}
        {descriptionTx ? (
          <Text
            style={styles.$modalMessageDescription}
            tx={descriptionTx}
            txOptions={descriptionTxOptions}
          />
        ) : null}
        {children}
      </Box>

      <Box style={styles.$doneBtnContainer}>
        <Button onPress={openModal} tx={ctaLabel ?? 'submitSuccessLabel.ctaText'} />
      </Box>
    </Box>
  );
}
