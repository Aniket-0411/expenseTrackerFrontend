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
 * This screen is used to change the user password forcefully.
 */
export function ForcePasswordChange() {
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
    currentPassword: 'Bloom@123',
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

  const CLIENT_ID = process.env.EXPO_PUBLIC_AZURE_AD_B2C_CLIENT_ID ?? '';
  const POLICY_NAME = process.env.EXPO_PUBLIC_AZURE_AD_B2C_POLICY_NAME ?? '';
  const TENANT_NAME = process.env.EXPO_PUBLIC_AZURE_AD_B2C_TENANT_NAME ?? '';
  const GRANT_TYPE = 'client_credentials';
  const CLIENT_SECRET = process.env.EXPO_PUBLIC_AZURE_AD_B2C_CLIENT_SECRET;
  const SCOPE = 'https://graph.microsoft.com/.default';
  const AZURE_APP_ID = process.env.EXPO_PUBLIC_AZURE_AD_B2C_APP_ID;

  return (
    <Box>
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

      {values.newPassword === 'Bloom@123' ? (
        <Text
          mt="s"
          py="s"
          textAlign="center"
          tx="changePassword.defaultPasswordError"
          variant="infoText"
        />
      ) : null}

      {values.confirmPassword && values.confirmPassword !== values.newPassword ? (
        <Text
          mt="s"
          py="s"
          textAlign="center"
          tx="changePassword.passwordMismatch"
          variant="infoText"
        />
      ) : null}

      <Button
        isDisabled={
          isPending ||
          !values.currentPassword ||
          !values.newPassword ||
          !values.confirmPassword ||
          values.confirmPassword !== values.newPassword ||
          values.newPassword === 'Bloom@123'
        }
        isLoading={isPending}
        mt="s"
        onPress={handleSubmit}
        tx="changePassword.submit"
      />

      {error ? <ErrorInFormFeedback error={error} /> : null}

      {error ? (
        <Text mt="s" py="s" text={JSON.stringify(error)} textAlign="center" variant="infoText" />
      ) : null}

      {__DEV__ ? (
        <>
          <Text text={`Client ID: ${CLIENT_ID}`} />
          <Text text={`Policy Name: ${POLICY_NAME}`} />
          <Text text={`Tenant Name: ${TENANT_NAME}`} />
          <Text text={`Grant Type: ${GRANT_TYPE}`} />
          <Text text={`Client Secret: ${CLIENT_SECRET}`} />
          <Text text={`Scope: ${SCOPE}`} />
          <Text text={`Azure App ID: ${AZURE_APP_ID}`} />
        </>
      ) : null}

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
