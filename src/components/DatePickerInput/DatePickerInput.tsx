import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { CalendarIcon } from '~/design-system';

import styles from './styles';

interface IDatePickerInput {
  // iconSize?: number;
  // iconColor?: string;
  onDateChange: (selectedDate: Date) => void;
  placeholder?: string;
}

/**
 * -----------------------------------------------------------------------------
 * Renders the input field for the date picker, with the calendar icon to open
 * the date picker.
 */
export function DatePickerInput({
  placeholder = 'Choose Move in date',
  // iconSize = 24,
  onDateChange,
}: IDatePickerInput) {
  const [date, setDate] = useState<Date | null>(null); // Initially, date is null
  const [show, setShow] = useState<boolean>(false);

  const handleOnChange = (_: unknown, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate || new Date());
    if (selectedDate) onDateChange(selectedDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.$container}>
      <TextInput
        editable={false}
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.$input}
        value={date ? date.toDateString() : ''}
      />
      <TouchableOpacity onPress={showDatePicker} style={styles.$iconContainer}>
        <CalendarIcon />
      </TouchableOpacity>
      {show ? (
        <DateTimePicker
          display="default"
          mode="date"
          onChange={handleOnChange}
          testID="dateTimePicker"
          value={date || new Date()}
        />
      ) : null}
    </View>
  );
}
