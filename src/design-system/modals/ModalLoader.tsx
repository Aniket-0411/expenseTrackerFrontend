import { ActivityIndicator } from 'react-native';

import { Box, Text, useThemeColors } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * Shows a loading indicator and helpful message when the background action is
 * in progress.
 */
export function ModalLoader() {
  const { buttonPrimaryBackground } = useThemeColors();

  return (
    <Box
      alignItems="center"
      alignSelf="center"
      flexDirection="column"
      justifyContent="flex-start"
      padding="s"
    >
      <ActivityIndicator color={buttonPrimaryBackground} size="small" />

      <Text paddingTop="xl" variant="infoText">
        Please wait
      </Text>
    </Box>
  );
}
