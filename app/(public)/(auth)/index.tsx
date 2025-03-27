import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';

import { Box } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * This acts the public facing pages of the application. This is where the user
 * is redirected based on the user's authentication status.
 */
export default function PublicPages() {
  return (
    <Box
      alignContent="center"
      bg="danger"
      borderColor="buttonPrimaryBackground"
      justifyContent="center"
    >
      <ActivityIndicator />

      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Box>
  );
}
