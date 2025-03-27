import { TUIError } from '~/utils';
import { TxKeyPath } from '~/i18n';
import { Box } from '~/theme';

import { AppModalPopup } from '../AppModal';

import { OTPInputCapture } from './OTPInputCapture';
import { OTPLoaderAndError } from './OTPLoaderAndError';

interface IOtpModalProps {
  errorInValidateOTP: TUIError;
  errorInSendingOTP: TUIError;
  isValidatingOTP: boolean;
  isOpen: boolean;
  isSendingOTP: boolean;
  contactInfo: string;
  contactType: 'mobile number' | 'email';
  otpLength?: number;
  onCloseModal: () => void;
  onSendOTP: () => void;
  onValidateOTP: (otp: string) => void;
}

/**
 * -----------------------------------------------------------------------------
 * This is used to capture OTP from the user, validate it, send it to the server
 * and show any errors that occur during the process with the option to retry.
 */
export function OtpModal({
  contactInfo,
  contactType,
  otpLength = 6,
  errorInValidateOTP,
  errorInSendingOTP,
  isSendingOTP,
  isOpen,
  isValidatingOTP,
  onSendOTP,
  onValidateOTP,
  onCloseModal,
}: IOtpModalProps) {
  const handleOnCloseModal = () => {
    onCloseModal?.();
  };

  let otpTitle: TxKeyPath = 'otpModal.title';
  let otpSubTitle: TxKeyPath = 'otpModal.subtitle';

  if (isValidatingOTP) {
    otpTitle = 'otpModal.titleValidatingOTP';
    otpSubTitle = 'otpModal.subtitleValidatingOTP';
  } else if (isSendingOTP) {
    otpTitle = 'otpModal.titleSendingOTP';
    otpSubTitle = 'otpModal.subtitleSendingOTP';
  } else if (errorInValidateOTP) {
    otpTitle = 'otpModal.titleValidatingOTPError';
    otpSubTitle = 'otpModal.subtitleValidatingOTPError';
  } else if (errorInSendingOTP) {
    otpTitle = 'otpModal.titleSendingOTPError';
    otpSubTitle = 'otpModal.subtitleSendingOTPError';
  }

  return (
    <AppModalPopup
      isDismissible
      isVisible={isOpen}
      onCloseModal={handleOnCloseModal}
      subtitle={otpSubTitle}
      subtitleTxOptions={{ contactInfo, contactType }}
      title={otpTitle}
    >
      <Box pb="s">
        {isSendingOTP || errorInSendingOTP?.message ? (
          <OTPLoaderAndError
            error={errorInSendingOTP}
            onCancel={handleOnCloseModal}
            onSendOTP={onSendOTP}
            otpLength={otpLength}
          />
        ) : (
          <OTPInputCapture
            error={errorInValidateOTP}
            isLoading={isValidatingOTP}
            onSendOTP={onSendOTP}
            onValidateOTP={onValidateOTP}
            otpLength={otpLength}
          />
        )}
      </Box>
    </AppModalPopup>
  );
}
