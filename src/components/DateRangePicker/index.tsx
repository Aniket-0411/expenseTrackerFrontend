import React, { useState } from "react";
import { StyleSheet, Modal, TouchableOpacity, Dimensions } from "react-native";

import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { Box, Text } from "~/theme";
import {
  ActivityIndicator,
  ArrowDownIcon,
  CalendarIcon,
  Pressable,
  ArrowRightIcon,
  ArrowIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "~/design-system";

interface IDateRangePickerProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  onDateChange: (date: Date, type: string) => void;
  onCancel: () => void;
  onClear: () => void;
  isLoading: boolean;
  isEnabled: boolean;
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onToggle: () => void;
}

export const DateRangePicker = ({
  selectedStartDate,
  selectedEndDate,
  onDateChange,
  onClear,
  isLoading,
  isVisible,
  isEnabled,
  onClose,
  onConfirm,
  onToggle,
}: IDateRangePickerProps) => {
  const formatDate = (date: Date) => {
    return date ? moment(date).format("MMMM DD, YYYY") : "";
  };

  const handleConfirm = () => {
    onClose();
    onConfirm();
    // Here you can add any action you want to perform with the selected date range
    console.log("Selected date range:", {
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    });
  };

  const isDateSelected = selectedStartDate && selectedEndDate;
  const width = Dimensions.get("window").width;

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="m"
      mx="m"
    >
      <Pressable onPress={() => onToggle()}>
        <Box
          alignItems="center"
          // bg={isSelected ? 'inputBackgroundFocused' : 'inputBackground'}
          bg="inputBackground"
          borderColor="inputBorder"
          borderRadius="l"
          borderWidth={0.35}
          flexDirection="row"
          flexGrow={1}
          gap="s"
          opacity={isEnabled ? 1 : 0.5}
          px="s"
          py="xs"
          height={40}
          width="100%"
        >
          <Text
            color="logoForeground"
            fontSize={8}
            lineHeight={10}
            py="xxs"
            text={
              isDateSelected
                ? formatDate(selectedStartDate) +
                  " - " +
                  formatDate(selectedEndDate)
                : "Select Date Range"
            }
          />
        </Box>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => onClose()}
      >
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          bg="primarySnippetBg"
        >
          <Box
            bg="transparent"
            borderRadius="m"
            padding="m"
            width="90%"
            maxWidth={380}
            alignItems="center"
          >
            <Text style={styles.modalHeader}>Select Date Range</Text>
            <Box width="100%" marginBottom="m">
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                selectedStartDate={selectedStartDate || undefined}
                selectedEndDate={selectedEndDate || undefined}
                onDateChange={onDateChange}
                width={width - 40}
                selectedDayColor="#007AFF"
                selectedDayTextColor="#FFFFFF"
                
                headerWrapperStyle={{
                  backgroundColor: "transparent",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingVertical: 10,
                }}
                previousComponent={
                  <Box>
                    <CaretLeftIcon
                      color="primaryForegroundHighlight"
                      width={20}
                      height={20}
                    />
                  </Box>
                }
                nextComponent={
                  <Box>
                    <CaretRightIcon
                      color="primaryForegroundHighlight"
                      width={20}
                      height={20}
                    />
                  </Box>
                }
              />
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              marginTop="m"
            >
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => onClose()}
              >
                <Text style={styles.buttonTextCancel}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={onClear}
              >
                <Text style={styles.buttonTextClear}>Clear</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  styles.confirmButton,
                  !selectedStartDate && styles.disabledButton,
                ]}
                onPress={handleConfirm}
                disabled={!selectedStartDate}
              >
                <Text style={styles.buttonTextConfirm}>Confirm</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  clearButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  confirmButton: {
    backgroundColor: "#007AFF",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  buttonTextCancel: {
    color: "#666",
    fontWeight: "500",
  },
  buttonTextClear: {
    color: "#666",
    fontWeight: "500",
  },
  buttonTextConfirm: {
    color: "white",
    fontWeight: "500",
  },
});
