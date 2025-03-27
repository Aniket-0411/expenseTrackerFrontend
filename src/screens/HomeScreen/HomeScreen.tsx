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

/**
 * -----------------------------------------------------------------------------
 * The main landing page of the application
 */
export function HomeScreen() {
  const [isExpenseAmountModalVisible, setExpenseAmountModalVisible] =
    useState(false);
  const [selectedMonth, setSelectedMonth] = useState<TMonth>("March");
  const { user } = useAuthStore();
  const { data: expenses, refetch, isLoading } = useGetExpensesQuery(
    user?.id || "",
    selectedMonth
  );

  const totalExp = expenses?.reduce((acc, curr) => acc + curr.amount, 0);
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
            gap="m"
            justifyContent="space-between"
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
            <Box width="19%">
              <MonthSelectionDropdown
                selectedMonth={selectedMonth}
                onMonthChange={(month: TMonth) => {
                  setSelectedMonth(month);
                  // Refetch expenses when month changes
                  refetch();
                }}
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
            {expenses?.reduce((acc, curr) => acc + curr.amount, 0).toString().slice(0, 8) || 0}
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
        expenses={expenses || []}
        limit={5}
        onSeeAllPress={() => {
          // Navigate to the transactions screen
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
