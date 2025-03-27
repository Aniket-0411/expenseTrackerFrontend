import { useState } from 'react';

import { TUIError } from '~/utils';
import { Box, Text } from '~/theme';

import { NavLinkItem, Button } from '../../button';
import { FormFeedbackSection } from '../../form';

import { OtpInputFieldItem } from './OtpInputField';

interface IOTPInputCaptureProps {
  error: TUIError; // errorInValidateOTP
  isLoading: boolean; // isValidatingOTP
  onSendOTP: () => void;
  onValidateOTP: (otp: string) => void;
  otpLength: number;
}

/**
 * -----------------------------------------------------------------------------
 * This renders the input fields group that captures the Otp, with and submit
 * the OTP to the server for verification.
 * - Also provides an option to resend the OTP.
 * -
 * TODO: Add a count down time to prevent the user from spamming the OTP sending.
 */
export function OTPInputCapture({
  error,
  isLoading,
  onSendOTP,
  onValidateOTP,
  otpLength,
}: IOTPInputCaptureProps) {
  const [otp, setOtp] = useState('');
  const isFullLength = otp.replace(' ', '').length === otpLength;

  const onOtpChange = (value: string) => {
    setOtp(value);

    if (isFullLength) {
      onValidateOTP(otp);
    }
  };

  const handleValidateOTP = () => {
    onValidateOTP(otp);
  };

  const handleResendCode = () => {
    // TODO: Add count down timer to prevent spamming the OTP sending.
    onSendOTP();
  };

  return (
    <>
      {error?.message ? (
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
      ) : null}

      <Box flexDirection="column" pt="m">
        <OtpInputFieldItem
          isEnabled={!isLoading}
          onInputChange={onOtpChange}
          otpValue={otp}
          valueLength={4}
        />

        <Box
          alignItems="center"
          flexDirection="row"
          gap="s"
          justifyContent="center"
          pb="s"
          pt="xxs"
        >
          <Text color="textCaption" tx="otpModal.didNotReceiveCode" />

          <NavLinkItem
            boxProps={{ py: 's', px: 'none' }}
            onPress={handleResendCode}
            tx="otpModal.resendCode"
          />
        </Box>
      </Box>

      <Button
        isDisabled={!isFullLength}
        isLoading={isLoading}
        mx="m"
        onPress={handleValidateOTP}
        tx="otpModal.ctaLabel"
        txLoading="otpModal.ctaLabelLoading"
      />
    </>
  );
}
