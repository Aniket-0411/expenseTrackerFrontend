import { StyleSheet } from 'react-native';

import { TxKeyPath } from '~/i18n';
import { Box, Text } from '~/theme';

import { InfoCircleIcon } from '../../../icons';

const styles = StyleSheet.create({
  container: { paddingHorizontal: '20%', paddingTop: '40%' },
});

interface ISearchedItemNotFoundProps {
  message?: TxKeyPath;
  subtitle?: TxKeyPath;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a helpful message to alert the user that their search input
 * has no matching item in the picker, and inform them to retry.
 */
export function SearchedItemNotFound({ message, subtitle }: ISearchedItemNotFoundProps) {
  return (
    <Box alignItems="center" flexGrow={1} height="100%" style={styles.container}>
      <InfoCircleIcon
        boxProps={{
          mb: 'xl',
        }}
        color="primaryBackgroundAlt"
        size={48}
      />

      <Text
        fontSize={15}
        lineHeight={24}
        textAlign="center"
        tx={message ?? 'forms.errors.noSearchMatch'}
        variant="title"
      />

      <Text
        fontSize={14}
        lineHeight={24}
        textAlign="center"
        tx={subtitle ?? 'forms.errors.tryOtherOption'}
        variant="title"
      />
    </Box>
  );
}
