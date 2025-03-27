import * as Animatable from 'react-native-animatable';

import { Text, Box } from '~/theme';
import { IFieldError, Pressable, XMarkIcon } from '~/design-system';

interface IFormLocalErrorsFeedbackProps {
  errors: IFieldError[];
  onResetErrors: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * This renders the errors in the form thrown from local inputs validation,
 * especially useful for handling errors and logic that is outside the context
 * of the useForm hook.
 */
export function FormLocalErrorsFeedback({ errors, onResetErrors }: IFormLocalErrorsFeedbackProps) {
  return (
    <Box
      bg="cardErrorBackground"
      borderColor="cardErrorBorder"
      borderRadius="xs"
      borderWidth={1}
      gap="xs"
      my="s"
      p="s"
    >
      <Text
        color="danger"
        fontSize={12}
        lineHeight={13}
        me="l"
        tx="tenantMoveIn.formValidation.identifiedErrorsMessage"
      />
      <Box end={-8} position="absolute" top={-8}>
        <Pressable onPress={onResetErrors}>
          <Box
            bg="buttonSecondaryBackground"
            borderColor="modalBackground"
            borderRadius="xl"
            borderWidth={1}
            opacity={0.8}
            p="s"
          >
            <XMarkIcon size={16} />
          </Box>
        </Pressable>
      </Box>

      <Animatable.View animation="fadeIn" delay={100} duration={800} easing="ease-in-out">
        <Box gap="s" my="xs">
          {errors.map(({ errorLocalized, errorTx }, index) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={`${errorTx}-${index}`}
              alignItems="center"
              flexDirection="row"
              gap="xs"
              opacity={1}
            >
              <Box bg="danger" borderRadius="xl" height={4} width={4} />
              <Text
                fontSize={11}
                lineHeight={12}
                opacity={0.75}
                tx={errorTx}
                txLocalized={errorLocalized}
              />
            </Box>
          ))}
        </Box>
      </Animatable.View>
    </Box>
  );
}
