import * as Animatable from 'react-native-animatable';

import { isEmpty, removeEmptyKeys } from '~/utils';
import { Box, Text } from '~/theme';

import { XMarkIcon } from '../../icons';

interface IFormErrorsSummaryProps {
  errors: Record<string, string>;
  handleDismiss: () => void;
  isVisible: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Summarizes all the Errors in the form.
 */
export function FormErrorsSummary({ errors, handleDismiss, isVisible }: IFormErrorsSummaryProps) {
  const filteredErrors = removeEmptyKeys(errors);
  const formHasErrors = !isEmpty(filteredErrors);

  return isVisible && formHasErrors ? (
    <Animatable.View animation="fadeIn" duration={300}>
      <Box mb="m" pb="m" px="l">
        <Box alignItems="center" flexDirection="row" justifyContent="space-between">
          <Text
            color="textCaption"
            fontSize={12}
            textTransform="uppercase"
            tx="forms.errors.errorsInForm"
          />

          <XMarkIcon
            boxProps={{
              zIndex: 99000,
              paddingTop: 'm',
              paddingLeft: 'xxl',
              alignSelf: 'flex-end',
            }}
            onPress={handleDismiss}
            opacity={0.85}
            strokeColor="#2b2b2b"
          />
        </Box>

        <Box backgroundColor="mainBackground" borderRadius="xs" px="m" py="m">
          {Object.values(filteredErrors).map((error, index) => (
            <Text
              // eslint-disable-next-line react/no-array-index-key
              key={`${error}-${index}`}
              color="danger"
              fontFamily="fontPrimaryLight"
              fontSize={12}
              pb="xs"
            >
              {`- ${error}`}
            </Text>
          ))}
        </Box>
      </Box>
    </Animatable.View>
  ) : null;
}
