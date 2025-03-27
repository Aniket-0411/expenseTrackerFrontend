import { TUIError } from '~/utils';
import { Box, Text } from '~/theme';

import { Button } from '../../button';
import { FormFeedbackSection } from '../../form';

import { AppModalFooter } from '../AppModal';

import { OtpInputFieldDummy } from './OtpInputFieldDummy';

interface IOTPLoaderAndErrorProps {
  error: TUIError;
  onSendOTP: () => void;
  onCancel: () => void;
  otpLength: number;
}

/**
 * -----------------------------------------------------------------------------
 * Renders the fallback component of the OTP modal. Whether an error if
 * or the loading state.
 */
export function OTPLoaderAndError({
  error,
  onSendOTP,
  onCancel,
  otpLength,
}: IOTPLoaderAndErrorProps) {
  /**
   * UI to show if an error occurs while loading the GEnerating /Sending the OTP
   */
  if (error?.message) {
    return (
      <>
        <Box alignItems="center">
          <FormFeedbackSection
            bg="cardErrorBackground"
            borderColor="cardErrorBorder"
            borderRadius="xs"
            borderWidth={0.5}
            description={error.description || ''}
            descriptionTx="otpModal.registeredWarning"
            isFormSubmitting={false}
            message={error.message}
            mx="m"
            my="xs"
            opacity={0.75}
            px="s"
            py="xs"
            type="error"
          />
        </Box>

        <AppModalFooter
          cancelAction={{
            label: 'common.cancel',
            callback: onCancel,
          }}
          mx="m"
          okayAction={{
            label: 'common.retry',
            callback: onSendOTP,
          }}
        />
      </>
    );
  }

  /**
   * UI to show while the app loads app sends the OTP to the user's mobile.
   */
  return (
    <>
      <Box mt="m" pb="xs">
        <OtpInputFieldDummy otpLength={otpLength} />

        <Box mb="s" mt="m" mx="m">
          <Text color="textCaption" textAlign="center" tx="otpModal.footerTextSendingOTP" />
        </Box>
      </Box>

      <Button isDisabled isLoading mx="m" onPress={onSendOTP} txLoading="common.pleaseWait" />
    </>
  );
}
