import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';

import { TxKeyPath } from '~/i18n';
import { Box, Text } from '~/theme';

import { ModalSearch } from './ModalSearch';
import { ModalCloseButton } from './ModalCloseButton';
import { ListItemSeparator } from './ListItemSeparator';
import { ListRenderItem, IItem } from './ListRenderItem';

interface IPassCallbackToModalPickerItemOptions {
  onSelectItem(item: IItem): void;
}

interface IRenderModalPickerItemOptions {
  item: IItem;
}

/**
 * Displays a single `item` for the pickers list. This `curry` function passes the
 * underlying `item` from the base `FlatList` render component, alongside a
 * callback from the parent that handles actions when the item is pressed.
 */
const passCallbackToModalPickerItem = ({ onSelectItem }: IPassCallbackToModalPickerItemOptions) =>
  function renderPickerItem({ item }: IRenderModalPickerItemOptions) {
    return <ListRenderItem item={item} onItemSelection={onSelectItem} />;
  };

interface IModalPickerProps {
  isVisible: boolean;
  items: IItem[];
  maxInputLength: number;
  name: TxKeyPath;
  onCloseModal: () => void;
  onItemSelect: (item: IItem) => void;
  placeholderSelection: IItem & {
    isPlaceholder: boolean;
  };
  searchOptions: {
    placeholder: TxKeyPath;
  };
}

/**
 * -----------------------------------------------------------------------------
 * Picker that pops up from the Bottom and provides a means to choose options
 * from a selected list of options.
 * It can be searchable.
 */
export function ModalPicker({
  isVisible,
  items,
  maxInputLength,
  name,
  onCloseModal,
  onItemSelect,
  placeholderSelection,
  searchOptions,
}: IModalPickerProps) {
  const [listItems, setListItems] = useState(items);

  useEffect(() => {
    if (placeholderSelection) {
      const d = placeholderSelection;
      d.isPlaceholder = true;

      setListItems([d, ...items]);
    } else {
      setListItems(items);
    }
  }, [placeholderSelection, items]);

  const handleSearchClear = () => {
    setListItems(items);
  };

  // On search input change, filter list to only the closes matching items
  const handleSearchInputChange = () => {
    setListItems(items);
  };

  const handleItemSelection = (selectedItem: IItem) => {
    onItemSelect(selectedItem);
  };

  return (
    <Modal
      animationInTiming={100}
      customBackdrop={<Box backgroundColor="screenUnderlay" height="100%" width="100%" />}
      isVisible={isVisible}
      onBackButtonPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      propagateSwipe
      scrollOffset={20}
      scrollOffsetMax={1000}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ margin: 0, marginTop: '15%' }}
      swipeDirection="down"
    >
      <Box
        backgroundColor="mainBackground"
        borderColor="modalBorder"
        borderTopLeftRadius="m"
        borderTopRightRadius="m"
        borderWidth={2}
        height="100%"
        margin="none"
        padding="none"
        paddingBottom="xl"
        width="100%"
      >
        <Box
          alignSelf="center"
          backgroundColor="buttonPrimaryBackground"
          borderRadius="m"
          height={6}
          marginVertical="m"
          opacity={0.1}
          position="relative"
          width="30%"
        />

        <Box borderBottomColor="modalBorder" borderBottomWidth={1} pb="m" pt="xl">
          <ModalCloseButton onClose={onCloseModal} />

          <Text mb="m" pl="l" variant="modalHeader">
            {name}
          </Text>

          {searchOptions ? (
            <ModalSearch
              // marginEnd="xs"
              // marginStart="l"
              maxLength={maxInputLength}
              onSearchClear={handleSearchClear}
              onSearchInputChange={handleSearchInputChange}
              searchOptions={searchOptions}
            />
          ) : null}
        </Box>

        {listItems.length > 0 && (
          <FlatList
            data={listItems}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(item, index) => `${item.value}-${index}`}
            maxToRenderPerBatch={50}
            renderItem={passCallbackToModalPickerItem({
              onSelectItem: handleItemSelection,
            })}
          />
        )}
      </Box>
    </Modal>
  );
}
