import { StyleProp, ViewStyle } from "react-native";
import { router } from 'expo-router';

import { ActionCapsuleButton } from "~/design-system";
import { TxKeyPath } from "~/i18n";
import { Box, BoxPropsType } from "~/theme";

export interface IQuickActionsGroupProps {
  label: TxKeyPath;
  lottieFile: string;
  id: "BUDGET" | "SCAN_INVOICE";
  lottieBoxStyleProps?: BoxPropsType;
  lottieStyle?: StyleProp<ViewStyle>;
}
export const QuickActionsGroup = () => {
  const quickActions: IQuickActionsGroupProps[] = [
    {
      label: "homeScreen.quickActions.budget",
      lottieFile: require("assets/animations/budget-animation.json"),
      id: "BUDGET",
      lottieStyle: { height: 60, width: 60 },
    },
    {
      label: "homeScreen.quickActions.scanInvoice",
      lottieFile: require("assets/animations/scanner-quick-action.json"),
      id: "SCAN_INVOICE",
      lottieStyle: { height: 20, width: 20 },
    },
  ];

  const handleOnPress = (id: "BUDGET" | "SCAN_INVOICE") => {
    switch (id) {
      case "BUDGET":
        // navigate to budget screen
        break;
      case "SCAN_INVOICE":
        // navigate to scan invoice screen
        router.navigate("/home/scan-invoice");
        break;
      default:
        break;
    }
  };

  return (
    <Box flexDirection="row" justifyContent="flex-start" gap="m" ms="m">
      {quickActions.map((action) => (
        <ActionCapsuleButton
          key={action.id}
          tx={action.label}
          lottieFile={action.lottieFile}
          onPress={() => handleOnPress(action.id)}
          baseBoxStyleProps={action.lottieBoxStyleProps}
          lottieStyle={action.lottieStyle}
        />
      ))}
    </Box>
  );
};
