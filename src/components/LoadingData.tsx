import LottieView from "lottie-react-native";
import { Box } from "~/theme";

export const LoadingData = () => {
  return (
    <Box height="40%" width="100%" alignItems="center">
      <LottieView
        autoPlay
        loop
        source={require("assets/animations/Loading_animation.json")}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </Box>
  );
};
