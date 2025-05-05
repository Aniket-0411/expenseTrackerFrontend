import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { router } from "expo-router";
import { Box } from "~/theme";
import { TabIcon } from "./TabIcon";

export type TTabName = "home" | "statics" | "profile" | "bot" | "finance_analytics";

const BottomNav = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const handleIconPress = (iconName: TTabName) => {
    setSelectedIcon(iconName);
    if (iconName === "home") {
      setSelectedIcon("home");
      router.navigate("/home");
    } else if (iconName === "statics") {
      setSelectedIcon("statics");
      router.navigate("/analytics");
    } else if (iconName === "profile") {
      setSelectedIcon("profile");
      router.navigate("/profile");
    } else if (iconName === "bot") {
      setSelectedIcon("bot");
      router.navigate("/bot");
    }
  };

  return (
    <Box
      alignSelf="center"
      width="120%"
      height={60}
      bg="stepperFill"
      borderRadius="l"
      marginBottom="l"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
    >
      <TouchableOpacity onPress={() => handleIconPress("home")}>
        <TabIcon focused={selectedIcon === "home"} tab="home" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleIconPress("statics")}>
        <TabIcon focused={selectedIcon === "statics"} tab="statics" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconPress("profile")}>
        <TabIcon focused={selectedIcon === "profile"} tab="profile" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconPress("bot")}>
        <TabIcon focused={selectedIcon === "bot"} tab="bot" />
      </TouchableOpacity>
    </Box>
  );
};

export default BottomNav;
