import { TouchableOpacity } from 'react-native';

import { Box, Text } from '~/theme';

export interface IItem {
  label: string;
  value: string;
}

interface IListRenderItemProps {
  item: IItem;
  onItemSelection: (item: IItem) => void;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a single item in the list
 */
export function ListRenderItem({ item, onItemSelection }: IListRenderItemProps) {
  const handleItemPress = () => {
    onItemSelection(item);
  };

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <Box
        alignSelf="center"
        justifyContent="center"
        marginTop="xs"
        padding="l"
        paddingVertical="m"
        width="100%"
      >
        <Text color="filterLabel" fontFamily="fontPrimaryLight" fontSize={16}>
          {item.label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
