import { Box } from "~/theme";
import { TTabName } from "./BottomNav";
import { ActiveIcon } from "./ActiveIcon";

interface ITabIconProps {
  focused: boolean;
  tab: TTabName;
}

// borderRadius: 40,
//     height: 45,
//     width: 45,
//     justifyContent: "center",
//     alignItems: "center",
export function TabIcon({ focused, tab }: ITabIconProps) {
  return (
    <Box
      bg={focused ? "tableBackground" : "transparent"}
      borderRadius="l"
      height={50}
      width={50}
      justifyContent="center"
      alignItems="center"
    >
      <ActiveIcon name={tab} />
    </Box>
  );
}
