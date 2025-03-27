import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Alert } from "react-native";

import { Box, Text } from "~/theme";
import { NoDataAvailable } from "./NoDataAvailable";
import { useAuthStore } from "~/services";
import { useDeleteExpenseMutation } from "~/apis";
import { EditExpenseModal } from "~/screens/HomeScreen/components/EditExpenseModal";

interface Expense {
  id: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: string;
  time: Date;
}

interface ITransactionProps {
  expense: Expense;
  onEditPress: (expense: Expense) => void;
  onDeletePress: (expense: Expense) => void;
}

const Transaction = ({
  expense,
  onEditPress,
  onDeletePress,
}: ITransactionProps) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    mb="s"
    p="s"
    borderBottomWidth={1}
    borderColor="inputBackgroundDisabled"
  >
    <Box flexDirection="row" alignItems="center">
      <Box
        width={40}
        height={40}
        borderRadius="l"
        justifyContent="center"
        alignItems="center"
        bg="rankBorder"
      >
        <Text>{expense.icon}</Text>
      </Box>
      <Box ml="s">
        <Text>{expense.head}</Text>
        <Text>
          {new Date(expense?.time || new Date()).toDateString()} • {new Date(expense?.time || new Date()).toLocaleTimeString()}
        </Text>
      </Box>
    </Box>
    <Box flexDirection="row" alignItems="center">
      <Text variant="bodyAlt" mr="m">${expense.amount}</Text>
      <Box flexDirection="row" gap="s">
        <TouchableOpacity onPress={() => onEditPress(expense)}>
          <Box
            width={30}
            height={30}
            borderRadius="s"
            justifyContent="center"
            alignItems="center"
            bg="buttonPrimaryBackground"
          >
            <Text color="mainBackground">✏️</Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeletePress(expense)}>
          <Box
            width={30}
            height={30}
            borderRadius="s"
            justifyContent="center"
            alignItems="center"
            bg="buttonPrimaryBackground"
          >
            <Text color="mainBackground">🗑️</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  </Box>
);

interface RecentTransactionsProps {
  expenses: Expense[];
  limit?: number;
  showSeeAll?: boolean;
  onSeeAllPress?: () => void;
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  expenses,
  limit,
  showSeeAll = true,
  onSeeAllPress,
}) => {
  const { user } = useAuthStore();
  const displayExpenses = limit ? expenses.slice(0, limit) : expenses;
  const { mutate: deleteExpense } = useDeleteExpenseMutation({
    onSuccess: () => {
      Alert.alert("Success", "Expense deleted successfully");
    },
    onError: (error) => {
      Alert.alert("Error", error.message || "Failed to delete expense");
    },
  });
  
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const handleEditPress = (expense: Expense) => {
    setSelectedExpense(expense);
    setIsEditModalVisible(true);
  };

  const handleDeletePress = (expense: Expense) => {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteExpense({
              id: expense.id,
              userId: user?.id || "",
            });
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <Box
      bg="primaryBackground"
      flex={1}
      mt="l"
      borderTopLeftRadius="m"
      borderTopRightRadius="m"
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mb="m"
        p="m"
      >
        <Text>Recent Transactions</Text>
        {showSeeAll && (
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text variant="link">See all</Text>
          </TouchableOpacity>
        )}
      </Box>
      <ScrollView>
        <Box
          flex={1}
          borderTopLeftRadius="m"
          borderTopRightRadius="m"
        >
          <Box width="100%" height="100%">
            {displayExpenses.length > 0 ? (
              displayExpenses.map((expense) => {
                return (
                  <Transaction
                    key={expense.id}
                    expense={expense}
                    onEditPress={handleEditPress}
                    onDeletePress={handleDeletePress}
                  />
                );
              })
            ) : (
              <NoDataAvailable />
            )}
          </Box>
        </Box>
      </ScrollView>
      
      {selectedExpense && (
        <EditExpenseModal
          isVisible={isEditModalVisible}
          onCloseModal={() => {
            setIsEditModalVisible(false);
            setSelectedExpense(null);
          }}
          expense={selectedExpense}
        />
      )}
    </Box>
  );
};
