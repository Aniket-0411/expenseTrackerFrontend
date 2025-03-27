import { useState } from "react";
import { AppModalListItem, AppModalPopup } from "~/design-system";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TxKeyPath } from "~/i18n";

export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

interface IMonthModalItemListItem {
  id: TMonth;
  txLabel: TxKeyPath;
}

export const months: IMonthModalItemListItem[] = [
  {
    id: "January",
    txLabel: "common.months.january",
  },
  {
    id: "February",
    txLabel: "common.months.february",
  },
  {
    id: "March",
    txLabel: "common.months.march",
  },
  {
    id: "April",
    txLabel: "common.months.april",
  },
  {
    id: "May",
    txLabel: "common.months.may",
  },
  {
    id: "June",
    txLabel: "common.months.june",
  },
  {
    id: "July",
    txLabel: "common.months.july",
  },
  {
    id: "August",
    txLabel: "common.months.august",
  },
  {
    id: "September",
    txLabel: "common.months.september",
  },
  {
    id: "October",
    txLabel: "common.months.october",
  },
  {
    id: "November",
    txLabel: "common.months.november",
  },
  {
    id: "December",
    txLabel: "common.months.december",
  },
];

interface IMonthSelectionModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSelectMonth: (month: TMonth) => void;
  selectedMonth: TMonth | null;
}

export function MonthSelectionModal({
  isOpen,
  onCloseModal,
  onSelectMonth,
  selectedMonth,
}: IMonthSelectionModalProps) {
  const [selected, setSelected] = useState<TMonth | null>(selectedMonth);

  const handleSelectMonth = (month: IMonthModalItemListItem) => {
    setSelected(month.id);
    onSelectMonth(month.id);
    onCloseModal();
  };

  return (
    <AppModalPopup
      key="month-selection-modal"
      isDismissible
      isVisible={isOpen}
      onCloseModal={onCloseModal}
      title="homeScreen.monthSelectModal.title"
    >
      {months.map((month) => (
        <AppModalListItem
          type="RADIO"
          key={month.id}
          isSelected={selected === month.id}
          item={month}
          onPress={handleSelectMonth}
        />
      ))}
    </AppModalPopup>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#e0e0e0",
  },
  itemText: {
    fontSize: 16,
  },
});
