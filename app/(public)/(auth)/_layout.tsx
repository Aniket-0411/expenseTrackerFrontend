import { Stack } from 'expo-router';

/**
 * -----------------------------------------------------------------------------
 * This renders the public auth pages of the application.
 */
export default function AuthStack() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
