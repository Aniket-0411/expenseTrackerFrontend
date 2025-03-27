import { TTxOptions, TxKeyPath } from '~/i18n';
import { Box, BoxPropsType, Text } from '~/theme';
import { IApiError } from '~/utils';

interface ISectionFeedbackContentProps extends BoxPropsType {
  error:
  | IApiError
  | {
    type: 'ui-touched';
    descriptionTx?: TxKeyPath;
    descriptionTxOptions?: TTxOptions;
    messageTx?: TxKeyPath;
    messageTxOptions?: TTxOptions;
    description?: string;
    message?: string;
  };
}

/**
 * -----------------------------------------------------------------------------
 * This renders a user friendly error coming from the backend.
 * Should be placed directly below the submit button.
 */
export function ErrorInFormFeedback({ error, ...rest }: ISectionFeedbackContentProps) {
  return (
    <Box
      bg="cardErrorBackground"
      borderColor="cardErrorBorder"
      borderRadius="xs"
      borderWidth={1}
      gap="xs"
      mt="s"
      p="s"
      {...rest}
    >
      {error.message ? (
        <Text color="danger" fontSize={12} lineHeight={13} txLocalized={error.message} />
      ) : null}

      {error.type === 'ui-touched' && error.messageTx ? (
        <Text
          color="danger"
          fontSize={12}
          lineHeight={13}
          tx={error.messageTx}
          txOptions={error.messageTxOptions}
        />
      ) : null}

      <Box opacity={0.85}>
        {error.description ? (
          <Text fontSize={11} lineHeight={12} opacity={0.75} txLocalized={error.description} />
        ) : null}

        {error.type === 'ui-touched' && error.descriptionTx ? (
          <Text
            fontSize={11}
            lineHeight={12}
            opacity={0.75}
            tx={error.descriptionTx}
            txOptions={error.descriptionTxOptions}
          />
        ) : null}
      </Box>
    </Box>
  );
}
