/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import { Stack } from "expo-router";

function TabLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="analytics" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}

export default TabLayout;

