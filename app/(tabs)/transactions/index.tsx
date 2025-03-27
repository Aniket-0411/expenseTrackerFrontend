import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Text } from '~/theme';
import { RecentTransactions } from '~/components';
import { useAuthStore } from '~/services';
import { useGetExpensesQuery } from '~/apis';
import { MonthSelectionDropdown } from '~/screens/HomeScreen/components/MonthSelectDropdown';
import { TMonth } from '~/screens/HomeScreen/components/MonthSelectModal';

export default function TransactionsScreen() {
  const [selectedMonth, setSelectedMonth] = useState<TMonth>('March');
  const { user } = useAuthStore();
  const { data: expenses, refetch } = useGetExpensesQuery(user?.id || '', selectedMonth);

  return (
    <Box bg="subTitleAlt" flex={1} px="m" pt="l">
      <Box bg="subTitleAlt" flexDirection="row" justifyContent="space-between" alignItems="center" mb="l">
        <Text color="mainBackground" fontSize={24} fontFamily="fontPrimaryBold">Transactions</Text>
        <Box bg="danger" width="19%">
          <MonthSelectionDropdown
            selectedMonth={selectedMonth}
            onMonthChange={(month: TMonth) => {
              setSelectedMonth(month);
              refetch();
            }}
          />
        </Box>
      </Box>
      
      <ScrollView contentContainerStyle={{paddingBottom:80}} showsVerticalScrollIndicator={false}>
        <RecentTransactions 
          expenses={expenses || []} 
          showSeeAll={false}
        />
      </ScrollView>
    </Box>
  );
}
