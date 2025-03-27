import { IDropDowItem } from '../../../form.types';

import { PickerItem } from './PickerItem';

interface IPreviewedPickerItemProps {
  value: string;
  selectedItem?: IDropDowItem;
  handleItemSelection(item: IDropDowItem): void;
}

/**
 * -----------------------------------------------------------------------------
 * This is rendered at the top of the selected options to display what item is
 * currently selected within the list.
 */
export function PreviewedPickerItem({
  value,
  selectedItem,
  handleItemSelection,
}: IPreviewedPickerItemProps) {
  return value ? (
    <PickerItem
      borderBottomColor="loaderBackground"
      borderBottomWidth={1}
      item={{
        ...(selectedItem || {}),
        label: value,
        isSelected: true,
      }}
      onSelectItem={handleItemSelection}
    />
  ) : null;
}
