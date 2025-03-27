import { useSpendIcon } from "~/utils";
import { Box, Text } from "~/theme";
import { SpendCategory, spendIcons } from "~/utils/spends/useSpendIcon";

interface IHeadIconProps {
  value: string;
  category?: SpendCategory;
}

export const HeadIcon = ({ value, category }: IHeadIconProps) => {
  const { getSpendIcon } = useSpendIcon();
  
  // If a category is provided, use its icon; otherwise, detect from value
  const icon = category ? spendIcons[category] : getSpendIcon(value);

  return (
    <Box
      width={50}
      height={50}
      borderRadius="xs"
      bg="loaderBackground"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={22} lineHeight={36}>{icon}</Text>
    </Box>
  );
};
