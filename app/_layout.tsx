import { useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';

import { ReactQueryProvider, useAuthStore } from '~/services';

import { AppWrapper } from '../src/AppWrapper';

/**
 * -----------------------------------------------------------------------------
 * This is the initial layout of the application. This is where the user is
 * redirected based on the user's authentication status.
 */
function InitialLayout() {
  const router = useRouter();
  // const accountId = useAuthStore()?.activeSession?.accountId;
  const { user } = useAuthStore();
  console.log("user", user);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else {
      // Further if the user has an invalid session, redirect to the login page.
      // Later we will replace with a login redirection.
      router.replace('/(tabs)/home');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Slot />;
}

/**
 * -----------------------------------------------------------------------------
 * This acts as the entry point of the application. This also consumes the
 * `Wrapper` component which wraps the entire application and provides the
 * necessary providers, error boundaries, and anything else that wraps the
 * entire app.
 */
export default function RootLayout() {
  return (
    <ReactQueryProvider hasDevTools={false}>
      <AppWrapper>
        <InitialLayout />
      </AppWrapper>
    </ReactQueryProvider>
  );
}
