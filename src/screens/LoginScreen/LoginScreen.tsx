import { router } from "expo-router";
import LottieView from "lottie-react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

import { Screen } from "~/components";
import { Pressable } from "~/design-system";
import { Box, OnboardingGradientSVG, Text } from "~/theme";
import { useEffect } from "react";
import { useAuthStore } from "~/services/stores/useAuthStore";
import { useAddUserMutation } from "~/apis/useAuthMutation";

/**
 * -----------------------------------------------------------------------------
 * Login Screen component rendered at the `(public)/(auth)/login route.
 */
export function LoginScreen() {
  const setUser = useAuthStore((state) => state.setUser);
  const { mutate: addUser } = useAddUserMutation({
    onSuccess: () => router.navigate("/(tabs)/home"),
    onError: (error) => console.error("Failed to add/update user", error),
  });

  const handleToHome_ = () => {
    router.navigate("/(tabs)/home");
  };
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
      iosClientId: process.env.IOS_CLIENT_ID || '1:846982737577:ios:c58642b08d032e44e6c3b8',
      webClientId: process.env.WEB_CLIENT_ID || '846982737577-jj5jrfn768mdqb2omjecl6h4f3tmnvif.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);
  const handleToHome = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      console.log("hasPlayServices");
      const userInfo = await GoogleSignin.signIn();
      const { accessToken } = await GoogleSignin.getTokens();

      console.log("userInfo❌❌❌❌❌❌❌❌", userInfo);

      if (!userInfo?.data || !userInfo.data.serverAuthCode) {
        throw new Error("Failed to get user info");
      }
      
      const user = {
        id: userInfo.data.user.id ,
        email: userInfo.data.user.email,
        givenName: userInfo.data.user.givenName || "",
        familyName: userInfo.data.user.familyName || "",
        name: userInfo.data.user.name || "",
        photo: userInfo.data.user.photo || "",
        serverAuthCode: userInfo.data.serverAuthCode,  
      };

      const newUser = { ...user };
      addUser(newUser);
      
      setUser(user, { accessToken });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("error", error);
        if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
          console.log("SIGN_IN_CANCELLED");
          // user cancelled the login flow
        } else if ((error as any).code === statusCodes.IN_PROGRESS) {
          console.log("IN_PROGRESS");
          // operation (e.g. sign in) is in progress already
        } else if ((error as any).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log("PLAY_SERVICES_NOT_AVAILABLE");
        } else {
          console.log("error", error.message);
          // some other error happened
        }
      }
    }
  };
  return (
    <Screen
      showBackNav={false}
      showHeader={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Box
        bg="rankBorder"
        alignItems="center"
        flex={1}
        flexDirection="column"
        gap="s"
        py="xxl"
      >
        <OnboardingGradientSVG
          bottom={0}
          top={0}
          left={0}
          right={0}
          position="absolute"
        />
        <Text
          fontFamily="fontPrimaryBold"
          text={"Expensly"}
          fontSize={40}
          lineHeight={60}
          color="logoForeground"
          my="l"
        />

        <LottieView
          source={require("assets/animations/no_bg_expense.json")}
          autoPlay
          loop
          style={{ height: "40%", width: "80%" }}
        />

        <Box
          bg="rankBorder"
          bottom={0}
          left={0}
          right={0}
          position="absolute"
          height="45%"
          borderTopLeftRadius="xl"
          borderTopRightRadius="xl"
          p="xl"
        >
          <Box alignItems="center" flex={1} px="l">
            <Text
              fontFamily="fontPrimarySemiBold"
              fontSize={28}
              lineHeight={40}
              my="l"
            >
              Best Way To Save Your Money
            </Text>
            <Pressable onPress={handleToHome}>
              <Box
                flexDirection="row"
                width="100%"
                mx="xl"
                borderWidth={1}
                alignItems="center"
                borderRadius="m"
                px="m"
                my="xl"
              >
                <LottieView
                  source={require("assets/animations/google.json")}
                  autoPlay
                  loop
                  style={{ height: "80%", width: "20%", marginEnd: 20 }}
                />
                <Text
                  fontFamily="fontPrimaryMedium"
                  fontSize={18}
                  lineHeight={20}
                  my="l"
                >
                  Sign In With Google
                </Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
