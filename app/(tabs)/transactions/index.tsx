import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Text } from '~/theme';
import { RecentTransactions } from '~/components';
import { useAuthStore } from '~/services';
import { useGetExpensesQuery } from '~/apis';
import { DateRangePicker } from '~/components/DateRangePicker';

export default function TransactionsScreen() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isDateRangePickerVisible, setDateRangePickerVisible] = useState(false);
  const { user } = useAuthStore();
  const { data: expenses, refetch, isLoading } = useGetExpensesQuery(user?.id || '', startDate, endDate);

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

  return (
    <Box bg="subTitleAlt" flex={1} px="m" pt="l">
      <Box bg="subTitleAlt" flexDirection="row" justifyContent="space-between" alignItems="center" mb="l">
        <Text color="mainBackground" fontSize={24} fontFamily="fontPrimaryBold">Transactions</Text>
        <Box p="s">
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
      
      <ScrollView contentContainerStyle={{paddingBottom:80}} showsVerticalScrollIndicator={false}>
        <RecentTransactions 
          expenses={expenses || []} 
          showSeeAll={false}
          isLoading={isLoading}
        />
      </ScrollView>
    </Box>
  );
}
