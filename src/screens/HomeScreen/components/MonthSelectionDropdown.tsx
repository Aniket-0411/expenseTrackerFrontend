import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface MonthSelectionDropdownProps {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export const MonthSelectionDropdown: React.FC<MonthSelectionDropdownProps> = ({
  selectedMonth,
  onMonthChange,
}) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => onMonthChange(itemValue)}
        style={styles.picker}
        dropdownIconColor="#FFFFFF"
      >
        <Picker.Item label="All" value="" />
        {months.map((month: string) => (
          <Picker.Item key={month} label={month} value={month} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    color: '#FFFFFF',
    height: 40,
    width: '100%',
  },
});
