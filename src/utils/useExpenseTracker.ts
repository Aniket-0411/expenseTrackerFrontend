import { useState, useCallback } from 'react';

export const useExpenseTracker = () => {
  // Get the current month in format "January", "February", etc.
  const getCurrentMonth = useCallback(() => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date();
    return months[date.getMonth()];
  }, []);

  // Get all months for dropdown
  const getAllMonths = useCallback(() => {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }, []);

  // Mock function for getting expenses by month (will be replaced by API call)
  const getExpensesByMonth = useCallback((month: string) => {
    // This is just a placeholder, the actual data will come from the API
    return [];
  }, []);

  return {
    getCurrentMonth,
    getAllMonths,
    getExpensesByMonth,
  };
};
