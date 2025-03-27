import { Box, BoxPropsType, Text } from "~/theme";
import LottieView from "lottie-react-native";
import { TxKeyPath } from "~/i18n";
import { Pressable } from "./Pressable";
import { StyleProp, ViewStyle } from "react-native";

interface IActionCapsuleButtonProps {
  onPress: () => void;
  tx: TxKeyPath;
  lottieFile: string;
  baseBoxStyleProps?: BoxPropsType;
  lottieStyle?: StyleProp<ViewStyle>;
}

export const ActionCapsuleButton = ({
  onPress,
  tx,
  lottieFile,
  baseBoxStyleProps,
  lottieStyle,
}: IActionCapsuleButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        alignItems="center"
        bg="actionIconBackground"
        gap="xs"
        borderColor="inputBorder"
        borderRadius="m"
        borderWidth={0.5}
        flexDirection="row"
        px="s"
        py="none"
        alignSelf="flex-start"
        {...baseBoxStyleProps}
      >
        <Box height={40} width={30} alignItems="center" justifyContent="center">
          <LottieView
            autoPlay
            loop
            source={lottieFile}
            style={[{ height: 40, width: 40 }, lottieStyle]}
          />
        </Box>
        <Box>
          <Text color="secondaryBackground" fontSize={14} fontFamily="fontPrimarySemiBold" tx={tx} />
        </Box>
      </Box>
    </Pressable>
  );
};
