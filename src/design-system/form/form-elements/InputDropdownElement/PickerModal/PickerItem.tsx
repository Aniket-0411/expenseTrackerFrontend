import { TouchableOpacity } from 'react-native';

import { Box, Text } from '~/theme';

import { IPickerItemProps } from '../../../form.types';
import { CheckIcon } from '~/design-system/icons';

/**
 * -----------------------------------------------------------------------------
 * Creates a picker that is displays as the base for each item in the modal.
 *
 * - Set the default picker item type as `radio` to allow for
 *   just a single selection.
 */
export function PickerItem({ onSelectItem: handleOnSelectItem, item, ...rest }: IPickerItemProps) {
  const { isSelected, label } = item;

  const onPressItem = () => {
    handleOnSelectItem(item);
  };

  return (
    <TouchableOpacity onPress={onPressItem}>
      <Box
        alignSelf="center"
        flexDirection="row"
        justifyContent="space-between"
        marginTop="xs"
        padding="l"
        paddingVertical="m"
        width="100%"
        {...rest}
      >
        <Text
          color="filterLabel"
          fontFamily={isSelected ? 'fontPrimaryRegular' : 'fontPrimaryLight'}
          fontSize={16}
        >
          {label}
        </Text>

        <Box
          alignItems="center"
          backgroundColor={isSelected ? 'buttonPrimaryBackground' : 'filterBorder'}
          borderRadius="xl"
          height={22}
          justifyContent="center"
          width={22}
        >
          {isSelected ? (
            <CheckIcon
              boxProps={{ px: 'none', py: 'none' }}
              color="mainBackground"
              onPress={onPressItem}
              size={13}
            />
          ) : null}
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
