import { router } from 'expo-router';
import { useState } from 'react';

import { useChangePasswordMutation } from '~/apis';
import { AppModal, SubmittedSuccessfullyContentModal } from '~/components';
import {
  Button,
  ErrorInFormFeedback,
  EyeHiddenIcon,
  EyeViewIcon,
  IFormFieldError,
  IInputChanged,
  PasswordInputField,
  Pressable,
  useForm,
} from '~/design-system';
import { useAuthStore } from '~/services';
import { Box, Text } from '~/theme';
import { ErrorEventsEnum, errorLogToRemoteUtil, IApiError } from '~/utils';

interface IChangePasswordFields {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * -----------------------------------------------------------------------------
 * This screen is used to change the user password.
 */
export function ChangePassword() {
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const { activeSession, removeSession } = useAuthStore();

  const handleChangePasswordSuccess = () => {
    setIsSuccessModalVisible(true);
    setTimeout(() => {
      removeSession();
      setIsSuccessModalVisible(false);
      router.replace('/login');
    }, 2000);
  };

  const handleChangePasswordError = (error: IApiError) => {
    errorLogToRemoteUtil({
      error,
      message: 'ChangePassword',
      errorCode: ErrorEventsEnum.ERROR_IN_API_CALL,
      errorTitle: 'Error in ChangePassword',
    });
  };

  const { changePassword, error, isPending } = useChangePasswordMutation({
    onSuccessCallback: handleChangePasswordSuccess,
    onErrorCallback: handleChangePasswordError,
  });

  const initialValues: IChangePasswordFields = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const handleChangePassword = async (value: IChangePasswordFields) => {
    changePassword({
      email: activeSession?.user.emailAddress || '',
      oldPassword: value.currentPassword,
      newPassword: value.newPassword,
    });
  };

  const { errors, handleOnBlur, handleOnInputChange, handleOnError, values, handleOnSubmitForm } =
    useForm<IChangePasswordFields>({
      initialValues,
      onSubmitCb: handleChangePassword,
    });

  const handleSubmit = () => {
    handleOnSubmitForm();
  };

  const handleOnModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <Box mt="xl">
      <PasswordInputField
        constraints={{
          feedbackLabel: 'changePassword.validationText',
          minLength: 7,
          required: true,
          type: 'password',
        }}
        error={errors.currentPassword}
        iconRight={
          <Pressable onPress={() => setIsCurrentPasswordVisible(!isCurrentPasswordVisible)}>
            {isCurrentPasswordVisible ? <EyeViewIcon /> : <EyeHiddenIcon />}
          </Pressable>
        }
        label="changePassword.currentPassword"
        name="currentPassword"
        onBlurCallback={(options: IInputChanged<any>) => handleOnBlur(options)}
        onChangeCallback={(change: IInputChanged<any>) => handleOnInputChange(change)}
        onError={(err: IFormFieldError<IChangePasswordFields>) => handleOnError(err)}
        placeholder="changePassword.currentPassword"
        secureTextEntry={!isCurrentPasswordVisible}
        value={values.currentPassword}
      />

      <PasswordInputField
        constraints={{
          feedbackLabel: 'changePassword.validationText',
          minLength: 7,
          required: true,
          type: 'password',
        }}
        error={errors.newPassword}
        iconRight={
          <Pressable onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}>
            {isNewPasswordVisible ? <EyeViewIcon /> : <EyeHiddenIcon />}
          </Pressable>
        }
        label="changePassword.newPassword"
        name="newPassword"
        onBlurCallback={handleOnBlur}
        onChangeCallback={handleOnInputChange}
        onError={(err: IFormFieldError<IChangePasswordFields>) => handleOnError(err)}
        placeholder="changePassword.newPassword"
        secureTextEntry={!isNewPasswordVisible}
        value={values.newPassword}
      />

      <PasswordInputField
        constraints={{
          feedbackLabel: 'changePassword.validationText',
          minLength: 7,
          required: true,
          type: 'password',
        }}
        error={errors.confirmPassword}
        iconRight={
          <Pressable onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
            {isConfirmPasswordVisible ? <EyeViewIcon /> : <EyeHiddenIcon />}
          </Pressable>
        }
        label="changePassword.confirmPassword"
        name="confirmPassword"
        onBlurCallback={handleOnBlur}
        onChangeCallback={handleOnInputChange}
        onError={handleOnError}
        placeholder="changePassword.confirmPassword"
        secureTextEntry={!isConfirmPasswordVisible}
        value={values.confirmPassword}
      />

      {values.confirmPassword && values.confirmPassword !== values.newPassword ? (
        <Text
          mt="s"
          py="s"
          textAlign="center"
          tx="changePassword.passwordMismatch"
          variant="infoText"
        />
      ) : null}

      {values.newPassword && values.newPassword === values.currentPassword ? (
        <Text
          mt="s"
          py="s"
          textAlign="center"
          tx="changePassword.defaultPasswordError"
          variant="infoText"
        />
      ) : null}

      <Button
        isDisabled={
          isPending ||
          !values.currentPassword ||
          !values.newPassword ||
          !values.confirmPassword ||
          values.confirmPassword !== values.newPassword
        }
        isLoading={isPending}
        mt="s"
        onPress={handleSubmit}
        tx="changePassword.submit"
      />

      {error ? <ErrorInFormFeedback error={error} /> : null}

      <AppModal modalVisibility={isSuccessModalVisible} onCloseModal={handleOnModalClose}>
        <SubmittedSuccessfullyContentModal
          descriptionTx="changePassword.passwordChanged"
          openModal={handleOnModalClose}
          title="changePassword.passwordChangeTitle"
        />
      </AppModal>
    </Box>
  );
}
