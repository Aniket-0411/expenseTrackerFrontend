import { useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { Box, Text } from '~/theme';

import { IDropDowItem, IPickerModalProps } from '../../../form.types';
import { ModalSearch } from '../../../../modals/ModalSearch';

import { SearchedItemNotFound } from '../SearchedItemNotFound';
import { ModalCloseButton } from '../ModalCloseButton';

import { ModalPickerItemSeparator } from './ModalPickerItemSeparator';
import { PickerItem } from './PickerItem';
import { PickerModalRefreshControl } from './PickerModalRefreshControl';
import { PreviewedPickerItem } from './PreviewedPickerItem';

const styles = StyleSheet.create({
  flatListContainer: { paddingBottom: 24 },
  modalContainer: { margin: 0, marginTop: '10%' },
  modalTitle: { width: '85%' },
});

interface IFilterBySearchItemsTextCallbackOptions {
  searchKey: string;
  newList: IDropDowItem[];
}

interface IPassCallbackToPickerItemOptions {
  onSelectItem(item: IDropDowItem): void;
}

interface IRenderPickerItemOptions {
  item: IDropDowItem;
}

/**
 * Displays a single `item` for the pickers list. This `curry` function passes the
 * underlying `item` from the base `FlatList` render component, alongside a
 * callback from the parent that handles actions when the item is pressed.
 */
const passCallbackToPickerItem = ({ onSelectItem }: IPassCallbackToPickerItemOptions) =>
  function renderPickerItem({ item }: IRenderPickerItemOptions) {
    return <PickerItem item={item} onSelectItem={onSelectItem} />;
  };

/**
 * -----------------------------------------------------------------------------
 * Picker that pops up from the Bottom and provides a means to choose options
 * from a selected list of options.
 *
 * - It can be searchable.
 */
export function PickerModal({
  enableSearch = true,
  isVisible,
  items,
  handleCloseModal,
  maxInputLength,
  maxToRenderPerBatch,
  modalTitle,
  onItemSelection,
  searchOptions,
  selectedItem,
  value,
}: IPickerModalProps) {
  const [listItems, setListItems] = useState(items);

  /**
   * `preSearchBackupList` keeps a temp copy of the original list of items
   */
  // eslint-disable-next-line react/hook-use-state
  const [preSearchBackupList] = useState(items);
  // eslint-disable-next-line react/hook-use-state
  const [isRefreshingList] = useState(false);

  const filterBySearchItemsTextCallback = ({
    searchKey,
    newList,
  }: IFilterBySearchItemsTextCallbackOptions) => {
    const filteredItems = newList.filter((item: IDropDowItem) =>
      item.label?.toLowerCase().includes(searchKey.toLowerCase())
    );

    setListItems(() => filteredItems);
  };

  const filterBySearchItemsText = useCallback(filterBySearchItemsTextCallback, []);

  const handleSearchClear = () => {
    setListItems(() => preSearchBackupList);
  };

  const handleSearchInputChange = (inputText: string) => {
    filterBySearchItemsText({
      searchKey: inputText,
      newList: preSearchBackupList,
    });
  };

  const handleItemSelection = useCallback(
    (item: IDropDowItem) => {
      onItemSelection(item);
    },
    [onItemSelection]
  );

  const handleOnRefresh = () => {
    // TODO, Call onRefreshResultsList to make fresh API call to pick filters
  };

  const getListItemKey = (item: IDropDowItem, index: number) => `${item.label}-${index}`;

  return (
    <Modal
      animationInTiming={100}
      customBackdrop={<Box backgroundColor="screenUnderlay" height="100%" width="100%" />}
      isVisible={isVisible}
      onBackButtonPress={handleCloseModal}
      onSwipeComplete={handleCloseModal}
      propagateSwipe
      scrollOffset={20}
      scrollOffsetMax={1000}
      style={styles.modalContainer}
      swipeDirection="down"
    >
      <Box
        backgroundColor="mainBackground"
        borderColor="modalBorder"
        borderTopLeftRadius="m"
        borderTopRightRadius="m"
        borderWidth={2}
        height="100%"
        m="none"
        padding="none"
        paddingBottom="xl"
        width="100%"
      >
        <Box
          alignSelf="center"
          backgroundColor="buttonPrimaryBackground"
          borderRadius="m"
          height={6}
          my="m"
          opacity={0.1}
          position="relative"
          width="30%"
        />

        <Box borderBottomColor="modalBorder" borderBottomWidth={1} pointerEvents="none">
          <ModalCloseButton onClose={handleCloseModal} />

          <Text mb="m" pl="l" style={styles.modalTitle} tx={modalTitle} variant="modalHeader" />

          {enableSearch && searchOptions ? (
            <ModalSearch
              maxLength={maxInputLength}
              onSearchClear={handleSearchClear}
              onSearchInputChange={handleSearchInputChange}
              searchOptions={searchOptions}
            />
          ) : null}
        </Box>

        {listItems.length > 0 ? (
          <Box flex={1}>
            <PreviewedPickerItem
              handleItemSelection={handleItemSelection}
              selectedItem={selectedItem}
              value={value}
            />

            <FlatList
              bounces
              contentContainerStyle={styles.flatListContainer}
              data={listItems}
              fadingEdgeLength={10}
              ItemSeparatorComponent={ModalPickerItemSeparator}
              keyboardDismissMode="on-drag"
              keyExtractor={getListItemKey}
              maxToRenderPerBatch={maxToRenderPerBatch ?? 50}
              refreshControl={
                <PickerModalRefreshControl
                  onRefresh={handleOnRefresh}
                  refreshing={isRefreshingList}
                />
              }
              renderItem={passCallbackToPickerItem({
                onSelectItem: handleItemSelection,
              })}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator
            />
          </Box>
        ) : (
          <SearchedItemNotFound />
        )}
      </Box>
    </Modal>
  );
}
