import { useState } from "react";
import { months, MonthSelectionModal, TMonth } from "./MonthSelectModal";
import { DropdownCTA } from "~/design-system";

const presentMonth = months[new Date().getMonth()].id;
interface IMonthSelectionDropdownProps {
  selectedMonth: TMonth;
  onMonthChange: (month: TMonth) => void;
}
export const MonthSelectionDropdown = ({
  selectedMonth,
  onMonthChange,
}: IMonthSelectionDropdownProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const selectedMonthLabel = months.find(
    (month) => month.id === selectedMonth
  )?.txLabel;

  return (
    <>
      <DropdownCTA
        bg="tabLabel"
        gap="xs"
        placeholder={selectedMonthLabel}
        isSelected={!!selectedMonth}
        isEnabled={true}
        onPress={() => setIsOpen(true)}
        px="s"
        py="none"
      />
      <MonthSelectionModal
        onCloseModal={() => setIsOpen(false)}
        selectedMonth={selectedMonth}
        onSelectMonth={onMonthChange}
        isOpen={isOpen}
      />
    </>
  );
};
