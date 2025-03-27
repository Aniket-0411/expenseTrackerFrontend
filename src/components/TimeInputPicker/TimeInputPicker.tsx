/* eslint-disable react-native/no-inline-styles */

import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { colors } from '~/theme';

const styles = StyleSheet.create({
  periodInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.7,
    textAlign: 'right',
  },

  time: {
    display: 'flex',
    flex: 1,
    gap: 10,
  },

  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 32,
    marginTop: 15,
  },

  timeInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.7,
  },

  timeText: {
    backgroundColor: colors.palette.neutral100,
    borderRadius: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 17,
  },
  timeTitle: {
    fontSize: 16,
    letterSpacing: 0.8,
  },
});

export interface ITimeInputPicker {
  /**
   * A function that will be called when the user changes the "from" time input.
   * The function will be passed the new value of the input as an argument.
   */
  onChangeFromTime: (time: string) => void;
  /**
   * A function that will be called when the user changes the "from" period input.
   * The function will be passed the new value of the input as an argument.
   */
  onChangeFromPeriod: (period: string) => void;
  /**
   * A function that will be called when the user changes the "to" time input. The
   * function will be passed the new value of the input as an argument.
   */
  onChangeToTime: (time: string) => void;
  /**
   * A function that will be called when the user changes the "to" period input.
   * The function will be passed the new value of the input as an argument.
   */
  onChangeToPeriod: (period: string) => void;
}

/**-----------------------------------------------------------------------------
 * A component that renders two input fields to allow the user to specify a range
 * of time. The component will notify the parent of any changes to the time or
 * period inputs.
 */
export function TimeInputPicker({
  onChangeFromPeriod,
  onChangeFromTime,
  onChangeToPeriod,
  onChangeToTime,
}: ITimeInputPicker) {
  const [fromTime, setFromTime] = useState('04:00');
  const [fromPeriod, setFromPeriod] = useState('PM');
  const [toTime, setToTime] = useState('07:00');
  const [toPeriod, setToPeriod] = useState('PM');

  const handleFromTimeChange = (time: string) => {
    setFromTime(time);
    onChangeFromTime(time);
  };

  const handleFromPeriodChange = (period: string) => {
    setFromPeriod(period);
    onChangeFromPeriod(period);
  };

  const handleToTimeChange = (time: string) => {
    setToTime(time);
    onChangeToTime(time);
  };

  const handleToPeriodChange = (period: string) => {
    setToPeriod(period);
    onChangeToPeriod(period);
  };

  return (
    <View style={styles.timeContainer}>
      <View style={styles.time}>
        <Text style={[styles.timeTitle, { fontWeight: '600' }]}>From</Text>
        <View style={styles.timeText}>
          <TextInput
            keyboardType="numeric"
            onChangeText={handleFromTimeChange}
            placeholder="HH:MM"
            style={styles.timeInput}
            value={fromTime}
          />
          <TextInput
            keyboardType="default"
            onChangeText={handleFromPeriodChange}
            placeholder="AM/PM"
            style={styles.periodInput}
            value={fromPeriod}
          />
        </View>
      </View>
      <View style={styles.time}>
        <Text style={[styles.timeTitle, { fontWeight: '600' }]}>To</Text>
        <View style={styles.timeText}>
          <TextInput
            keyboardType="numeric"
            onChangeText={handleToTimeChange}
            placeholder="HH:MM"
            style={styles.timeInput}
            value={toTime}
          />
          <TextInput
            keyboardType="default"
            onChangeText={handleToPeriodChange}
            placeholder="AM/PM"
            style={styles.periodInput}
            value={toPeriod}
          />
        </View>
      </View>
    </View>
  );
}
