import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

// import { useApiAuthTokenQuery } from '~/apis';
// import { checkIfTokenIsExpired } from '~/apis/helpers';
import { SectionFeedbackContent } from '~/design-system';
// import { us } from '~/services';
import { Box } from '~/theme';

/**
 * -----------------------------------------------------------------------------
 * This acts as the entry point of the application. But using the `Slot`
 * component in the `_layout.tsx` file, we can render the children of this
 * component in the layout file, and this component will not be rendered.
 */
export default function Home() {
  // const { integrationSession } = useAuthStore();
  // const { hasTokenError, refetchAuthToken } = useApiAuthTokenQuery();

  // const handleOnRefetchAuthToken = () => {
  //   /**
  //    * If integrations session is already present and it's not expired, then
  //    * we don't need to refetch the token. But if it's expired or not present,
  //    * then we need to refetch the token.
  //    */
  //   const issuedAt = integrationSession?.issuedAt;
  //   const isTokenExpired = checkIfTokenIsExpired(issuedAt || new Date());

  //   if (!issuedAt || isTokenExpired) {
  //     refetchAuthToken();
  //   }
  // };

  // useEffect(() => {
  //   handleOnRefetchAuthToken();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (hasTokenError) {
  //   return (
  //     <SectionFeedbackContent
  //       action={{
  //         onPress: handleOnRefetchAuthToken,
  //         label: 'errorScreen.authTokenError.retryLabel',
  //       }}
  //       description="errorScreen.authTokenError.description"
  //       hasLoadingIndicator
  //       heading="errorScreen.authTokenError.heading"
  //       mt="l"
  //       pb="none"
  //       title="errorScreen.authTokenError.title"
  //       type="INFO"
  //     />
  //   );
  // }

  return (
    <Box
      alignContent="center"
      bg="danger"
      borderColor="buttonPrimaryBackground"
      justifyContent="center"
    >
      <ActivityIndicator />

      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(public)" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Box>
  );
}
