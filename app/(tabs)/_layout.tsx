/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import { Stack } from "expo-router";
import { useAuthStore } from "~/services";
import BottomNav from "Model/BottomNav";
import { Box } from "~/theme";

function TabLayout() {
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="analytics" />
        <Stack.Screen name="home" />
        <Stack.Screen name="profile" />
      </Stack>

      {user?.id && (
        <Box position="absolute" bottom={0} left={20} right={30} mx="l">
          <BottomNav />
        </Box>
      )}
    </>
  );
}

export default TabLayout;

