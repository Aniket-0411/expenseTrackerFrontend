// TODO: Remove this once we add box props
/* eslint-disable react-native/no-inline-styles */

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Disabling this for now as @types/react-native-calendar-picker is breaking our images build
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CalendarPicker from 'react-native-calendar-picker';

import { colors } from '~/theme';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: colors.palette.neutral100,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    paddingBottom: 20,
    paddingTop: 0,
  },

  // dateText: {
  //   color: colors.palette.neutral900,
  //   fontSize: 10,
  //   marginTop: 10,
  // },

  dayHeaderText: {
    color: colors.palette.neutral900,
    fontSize: 10,
    textTransform: 'uppercase',
  },

  dayLabelsWrapper: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },

  monthTitle: {
    color: colors.palette.neutral900,
    fontSize: 18,
  },

  textStyle: {
    color: colors.palette.neutral900,
  },

  yearTitle: {
    color: colors.palette.neutral900,
    fontSize: 16,
  },
});

export interface IDatePickerProps {
  onDateSelected?: (date: Date | null) => void;
}

/**
 * -----------------------------------------------------------------------------
 * A component that renders a calendar date picker.
 */
export function DatePicker({ onDateSelected }: IDatePickerProps) {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);

  // Custom labels for the day headers (2-letter format)
  const customDayHeaders: string[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  const handleOnDateChange = (date: Date) => {
    setSelectedStartDate(date);

    if (onDateSelected) onDateSelected(date || selectedStartDate);
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        customDayHeaderStyles={() => ({
          textStyle: styles.dayHeaderText,
        })}
        dayLabelsWrapper={styles.dayLabelsWrapper}
        monthTitleStyle={[styles.monthTitle, { fontWeight: '600' }]}
        nextTitle=">"
        nextTitleStyle={{
          color: colors.palette.neutral900,
          fontWeight: '300',
          fontSize: 36,
          marginRight: 12,
        }}
        onDateChange={handleOnDateChange}
        previousTitle="<"
        previousTitleStyle={{
          color: colors.palette.neutral900,
          fontWeight: '300',
          fontSize: 36,
          marginLeft: 12,
        }}
        selectedDayColor={colors.palette.secondary}
        selectedDayTextColor={colors.palette.neutral100}
        textStyle={styles.textStyle}
        todayBackgroundColor={colors.palette.primary}
        todayTextStyle={{ color: colors.palette.neutral900 }}
        weekdays={customDayHeaders}
        yearTitleStyle={styles.yearTitle}
      />
    </View>
  );
}
