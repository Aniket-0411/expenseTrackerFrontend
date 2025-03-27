import LottieView from "lottie-react-native";
import * as AmountAnimationFile from "assets/animations/salary-animation.json";
import { Box } from "~/theme";

export const AmountAnimation = () => {
  return (
    <Box
      width={50}
      height={50}
      borderRadius="xs"
      bg="loaderBackground"
      justifyContent="center"
      alignItems="center"
    >
      <LottieView
        source={AmountAnimationFile}
        autoPlay
        loop
        style={{
          width: 40,
          height: 40,
        }}
      />
    </Box>
  );
};
