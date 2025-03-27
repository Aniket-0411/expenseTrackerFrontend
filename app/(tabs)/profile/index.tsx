import React from "react";
import { ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import { router } from "expo-router";
import { Box, Text } from "~/theme";
import { useAuthStore } from "~/services";

const ProfileScreen = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            logout();
            router.replace("/(public)/(auth)/login");
          },
          style: "destructive",
        },
      ]
    );
  };

  if (!user) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Not logged in</Text>
      </Box>
    );
  }

  return (
    <ScrollView>
      <Box flex={1} p="m">
        <Box 
          bg="primaryBackground" 
          p="l" 
          borderRadius="m"
          alignItems="center"
          mb="l"
        >
          {user.photo ? (
            <Image
              source={{ uri: user.photo }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 16,
              }}
            />
          ) : (
            <Box
              width={100}
              height={100}
              borderRadius="xl"
              bg="buttonPrimaryBackground"
              justifyContent="center"
              alignItems="center"
              mb="m"
            >
              <Text color="mainBackground" fontSize={40}>
                {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
              </Text>
            </Box>
          )}
          <Text fontFamily="fontPrimaryBold" fontSize={24} mb="s">
            {user.name || "User"}
          </Text>
          <Text color="textCaption" mb="m">
            {user.email}
          </Text>
        </Box>

        <Box bg="primaryBackground" p="m" borderRadius="m" mb="l">
          <Text fontFamily="fontPrimaryBold" fontSize={18} mb="m">
            Account Information
          </Text>
          
          <Box mb="m">
            <Text color="textCaption" mb="xs">Full Name</Text>
            <Text>{user.name || "Not provided"}</Text>
          </Box>
          
          <Box mb="m">
            <Text color="textCaption" mb="xs">Email</Text>
            <Text>{user.email}</Text>
          </Box>
          
          {user.givenName && (
            <Box mb="m">
              <Text color="textCaption" mb="xs">First Name</Text>
              <Text>{user.givenName}</Text>
            </Box>
          )}
          
          {user.familyName && (
            <Box mb="m">
              <Text color="textCaption" mb="xs">Last Name</Text>
              <Text>{user.familyName}</Text>
            </Box>
          )}
          
          <Box mb="m">
            <Text color="textCaption" mb="xs">User ID</Text>
            <Text>{user.id}</Text>
          </Box>
        </Box>

        <TouchableOpacity onPress={handleLogout}>
          <Box
            bg="buttonPrimaryBackground"
            p="m"
            borderRadius="m"
            alignItems="center"
            mb="l"
          >
            <Text color="mainBackground" fontFamily="fontPrimaryBold">
              Logout
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;