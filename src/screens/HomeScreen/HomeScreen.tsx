/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-max-depth */
import { useState } from "react";
import { Image } from "react-native";
import { router } from "expo-router";

import { Box, OnboardingGradientSVG, Text } from "~/theme";

import { LoadingData, RecentTransactions } from "~/components";
import { ActionCapsuleButton } from "~/design-system";
import { MonthSelectionDropdown } from "./components";
import { ExpenseModal } from "./components/AddExpenseModal";
import { QuickActionsGroup } from "./components/QuickActionsGroup";
// import { useExpenseTracker } from "~/utils";
import { useAuthStore } from "~/services";
import { useGetExpensesQuery } from "~/apis";
import { TMonth } from "./components/MonthSelectModal";
import { DateRangePicker } from "~/components/DateRangePicker";

/**
 * -----------------------------------------------------------------------------
 * The main landing page of the application
 */
export function HomeScreen() {
  const [isExpenseAmountModalVisible, setExpenseAmountModalVisible] =
    useState(false);
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  const [startDate, setStartDate] = useState<Date>(firstDayOfMonth);
  const [endDate, setEndDate] = useState<Date>(lastDayOfMonth);
  
  const [isDateRangePickerVisible, setDateRangePickerVisible] = useState(false);
  const { user } = useAuthStore();
  const {
    data: expenses,
    refetch,
    isLoading,
  } = useGetExpensesQuery(user?.id || "", startDate, endDate);

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
    refetch();
  };

  const handleConfirm = () => {
    setDateRangePickerVisible(false);
    refetch();
    console.log('Selected date range:', {
      startDate: startDate,
      endDate: endDate,
    });
  };

  const totalExp = Array.isArray(expenses)
  ? expenses.reduce((acc, curr) => acc + curr.amount, 0)
  : 0;

  console.log("totalExp🥥🥥🥥🥥🥥🥥🥥", totalExp);
  return (
    <Box flex={1} bg="rankBorder" mx="none" p="none">
      <OnboardingGradientSVG
        bottom={0}
        top={0}
        left={0}
        right={0}
        position="absolute"
      />
      <Box
        bg="screenUnderlay"
        borderBottomRightRadius="l"
        gap="m"
        justifyContent="center"
        pb="l"
      >
        <Box
          bg="subTitleAlt"
          borderBottomRightRadius="xxl"
          gap="m"
          justifyContent="center"
          px="m"
          py="xxl"
        >
          <Box
            alignItems="center"
            flexDirection="row"
            gap="s"
          >
            <Box
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
              gap="m"
            >
              <Image
                source={{
                  uri: user?.photo,
                }}
                height={40}
                width={40}
                borderRadius={20}
              />
              <Box>
                <Text
                  color="mainBackground"
                  fontSize={18}
                  lineHeight={22}
                  p="none"
                >
                  Welcome back!
                </Text>

                <Text
                  color="primaryForegroundHighlight"
                  fontSize={18}
                  lineHeight={22}
                  p="none"
                >
                  {user?.givenName}
                </Text>
              </Box>
            </Box>
            <Box>
              <DateRangePicker
                selectedStartDate={startDate}
                selectedEndDate={endDate}
                onDateChange={onDateChange}
                onConfirm={handleConfirm}
                isVisible={isDateRangePickerVisible}
                onCancel={() => setDateRangePickerVisible(false)}
                onClear={() => {
                  setStartDate(null);
                  setEndDate(null);
                }}
                onToggle={() => setDateRangePickerVisible(!isDateRangePickerVisible)}
                isLoading={isLoading}
                isEnabled={!isLoading}
                onClose={() => setDateRangePickerVisible(false)}
              />
            </Box>
          </Box>
          <Text
            color="mainBackground"
            fontSize={22}
            lineHeight={24}
            mt="xxl"
            mb="none"
            p="none"
          >
            Your Total Expense:
          </Text>
          {/* truncate to max of 4 significant digits */}
          <Text
            color="mainBackground"
            fontSize={32}
            mt="none"
            lineHeight={32}
            numberOfLines={1}
          >
            <Text
              color="primaryForegroundHighlight"
              fontFamily="fontPrimaryThin"
              fontSize={32}
              mt="none"
              lineHeight={32}
            >
              $
            </Text>{" "}
            {Array.isArray(expenses)
            ? expenses.reduce((acc, curr) => acc + curr.amount, 0).toString().slice(0, 8)
            : "0"
            }

          </Text>

          <ActionCapsuleButton
            onPress={() => {
              setExpenseAmountModalVisible(true);
            }}
            tx="homeScreen.recordAnExpense"
            lottieFile={require("assets/animations/expense-animation.json")}
          />
        </Box>
        <QuickActionsGroup />
      </Box>

      {isLoading && <LoadingData />}

      <RecentTransactions
  expenses={Array.isArray(expenses) ? expenses : []}
  limit={5}
  onSeeAllPress={() => {
    router.push("/(tabs)/transactions");
  }}
/>
      <ExpenseModal
        onCloseModal={() => setExpenseAmountModalVisible(false)}
        isVisible={isExpenseAmountModalVisible}
      />
    </Box>
  );
}
