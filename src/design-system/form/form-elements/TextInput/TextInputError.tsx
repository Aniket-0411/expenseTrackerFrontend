import { Text } from '~/theme';

import { TError } from '../../form.types';

interface TextInputErrorProps {
  error: TError;
  isRTL: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This renders the correct error message based on the error type.
 * - The string error either comes from the validation utils or from the server.
 * - The txLocalized error comes from the server duo language errors.
 */
export function TextInputError({ error, isRTL }: TextInputErrorProps) {
  if (!error) return null;

  if (typeof error === 'string') {
    return (
      <Text
        color="inputError"
        fontFamily="fontPrimaryLight"
        fontSize={12}
        text={error}
        textAlign={isRTL ? 'right' : 'left'}
      />
    );
  }

  return (
    <Text
      color="inputError"
      fontFamily="fontPrimaryLight"
      fontSize={12}
      textAlign={isRTL ? 'right' : 'left'}
      txLocalized={error}
    />
  );
}
