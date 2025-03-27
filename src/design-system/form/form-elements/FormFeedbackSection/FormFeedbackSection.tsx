import { TTextLocalized, TxKeyPath, TTxOptions } from '~/i18n';
import { Box, BoxPropsType, Text, TThemeColor } from '~/theme';

import { Button } from '../../../button';

interface IFormFeedbackSectionProps extends BoxPropsType {
  /**
   * Fallback action to be performed when the form is loading or an error happens.
   */
  action?: {
    label: TxKeyPath;
    onPress: () => void;
  };
  /**
   * Fallback action to be performed when the form is loading or an error happens.
   * This is the fallback action
   */
  actionAlt?: {
    label: TxKeyPath;
    onPress: () => void;
  };
  /**
   * Indicates whether to style the form message as an error or just info tip.
   */
  type: 'error' | 'info';
  /**
   * The tailwind css classes to augment the default class names.
   */
  className?: string;
  /**
   * The main message displayed below the title of the form.
   */
  message?: TTextLocalized;
  /**
   * Translation options to pass to the message translation.
   */
  messageTx?: TxKeyPath;
  /**
   * The alternative `message` displayed when the form is loading.
   */
  messageLoadingText?: TTextLocalized;
  /**
   * Loading message, directly translate the message using the given key path.
   */
  messageLoadingTextTx?: TxKeyPath;
  /**
   * Additional information to be shown below the main message.
   */
  description?: TTextLocalized;
  /**
   * Key path translation alternative to the `description` prop.
   */
  descriptionTx?: TxKeyPath;
  /**
   * Values to pass to the description translation.
   */
  descriptionTxOptions?: TTxOptions;
  /**
   * The alternative `description` displayed when the form is loading.
   */
  descriptionLoadingText?: TxKeyPath;
  /**
   * Whether the form is in loading state/currently submitting input via API or not.
   */
  isFormSubmitting: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This displays the form feedback at the top that renders the helpful tips and
 * form error messages returned from the server.
 */
export function FormFeedbackSection({
  action,
  actionAlt,
  type,
  message,
  messageTx,
  messageLoadingText,
  messageLoadingTextTx,
  description,
  descriptionTx,
  descriptionTxOptions,
  descriptionLoadingText,
  isFormSubmitting,
  ...rest
}: IFormFeedbackSectionProps) {
  let msg = message;
  let msgTx = messageTx;
  const desc = description;
  let descTx = descriptionTx;

  if (isFormSubmitting) {
    msg = messageLoadingText || '';
    msgTx = messageLoadingTextTx ?? 'forms.feedbackSection.loadingMessage';
    descTx = descriptionLoadingText ?? 'forms.feedbackSection.descriptionMessage';
  }

  const color: TThemeColor = type === 'error' ? 'inputError' : 'helperText';
  const bgColor: TThemeColor = type === 'error' ? 'cardErrorBackground' : 'actionIconBackground';

  return (
    <Box bg={bgColor} {...rest}>
      {msg || msgTx ? (
        <Box>
          <Text color={color} fontSize={13} tx={msgTx} txLocalized={msg} />
        </Box>
      ) : null}

      {desc || descriptionTx ? (
        <Box opacity={0.85}>
          <Text fontSize={11} txLocalized={desc} txOptions={descriptionTxOptions} />

          {descriptionTx ? (
            <Text fontSize={11} opacity={0.75} tx={descTx} txOptions={descriptionTxOptions} />
          ) : null}
        </Box>
      ) : null}

      {action || actionAlt ? (
        <Box alignItems="flex-end" flexDirection="row" gap="s" justifyContent="flex-end" py="xs">
          {action ? (
            <Button
              onPress={action.onPress}
              py="none"
              // eslint-disable-next-line react-native/no-inline-styles
              textStyle={{ fontSize: 10 }}
              tx={action.label}
            />
          ) : null}

          {actionAlt ? (
            <Button
              onPress={actionAlt.onPress}
              preset="secondary"
              py="none"
              // eslint-disable-next-line react-native/no-inline-styles
              textStyle={{ fontSize: 10 }}
              tx={actionAlt.label}
            />
          ) : null}
        </Box>
      ) : null}
    </Box>
  );
}
