import { useState, useCallback } from "react";
import {
  colorToCategory,
  keywordToCategory,
  SpendCategory,
  useSpendIcon,
} from "./useSpendIcon";
import { loadLocalData, saveLocalData } from "../storage";

interface IExpense {
  id: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: SpendCategory;
  time: Date;
}

export const useExpenseTracker = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const { getSpendIcon, getSpendType } = useSpendIcon();

  const getCurrentMonth = () =>
    new Date().toLocaleString("default", { month: "long" });

  const loadExpenses = useCallback(() => {
    const data = loadLocalData<IExpense[]>("expenses");
    if (data) {
      setExpenses(data);
    }
  }, []);

  const saveExpenses = (updatedExpenses: IExpense[]) => {
    console.log("updatedExpenses", updatedExpenses);
    saveLocalData("expenses", updatedExpenses);
    setExpenses(updatedExpenses);
  };

  const addExpense = (head: string, amount: number) => {
    const month = getCurrentMonth();
    const icon = getSpendIcon(head);
    const category = getSpendType(head);
    const newExpense: IExpense = {
      id: `${Date.now()}`,
      month,
      head,
      amount,
      icon,
      type: category,
      time: new Date(),
    };
    const oldExpenses = loadLocalData<IExpense[]>("expenses") || [];
    const updatedExpenses = [...oldExpenses, newExpense];
    saveExpenses(updatedExpenses);
    setExpenses(updatedExpenses);
  };

  const addBulkExpenses = (
    expenses: Array<{ head: string; amount: number }>
  ) => {
    const month = getCurrentMonth();
    const newExpenses = expenses.map(({ head, amount }) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      month,
      head,
      amount,
      icon: getSpendIcon(head),
      type: getSpendType(head),
      time: new Date(),
    }));

    const oldExpenses = loadLocalData<IExpense[]>("expenses") || [];
    const updatedExpenses = [...oldExpenses, ...newExpenses];
    saveExpenses(updatedExpenses);
  };

  const getExpensesByMonth = (month: string) => {
    const allExpense = loadLocalData<IExpense[]>("expenses");
    return allExpense?.filter((expense) => expense.month === month) || [];
  };

  const getBulkExpenses = (
    expenses: Array<{ head: string; amount: number }>
  ) => {
    const month = getCurrentMonth();
    const newExpenses = expenses.map(({ head, amount }) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      month,
      head,
      amount,
      icon: getSpendIcon(head),
      type: getSpendType(head),
      time: new Date(),
    }));
    return newExpenses;
  };

  const getExpense = (head: string, amount: number) => {
    const month = getCurrentMonth();
    const icon = getSpendIcon(head);
    const category = getSpendType(head);
    return {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      month,
      head,
      amount,
      icon,
      type: category,
      time: new Date(),
    };
  };

  // New function to create an expense with a manually selected category
  const getExpenseWithCategory = (head: string, amount: number, category: SpendCategory) => {
    const month = getCurrentMonth();
    // Use the category's icon instead of detecting from head
    const icon = keywordToCategory[category]?.length 
      ? getSpendIcon(keywordToCategory[category][0]) 
      : "❓";
    
    return {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      month,
      head,
      amount,
      icon,
      type: category,
      time: new Date(),
    };
  };

  /**
   * Return, amount, head name, icon, type of expense
   */
  const getCategoryWiseExpenses = (inputExpenses: IExpense[]) => {
    const allTypesOfExpenses = Object.keys(
      keywordToCategory
    ) as SpendCategory[];
    const allExpenses = inputExpenses || loadLocalData<IExpense[]>("expenses") || [];
    const categoryWiseExpenses: Record<string, IExpense[]> = {};
    // only return the expenses that have amount greater than 0
    const categoryExpenses = allTypesOfExpenses.map((type) => {
      const expenses = allExpenses.filter((expense) => expense.type === type);
      categoryWiseExpenses[type] = expenses;
      const returnValue = {
        type,
        head: type,
        total: expenses.reduce((acc, curr) => acc + curr.amount, 0),
        icon: expenses[0]?.icon,
        expenses,
        color: colorToCategory[type] || "#000",
      };

      return returnValue;
    });

    console.log("categoryExpenses🍆🍆🍆🍆", categoryExpenses);
    return categoryExpenses.filter((expense) => expense.total);
  };

  return {
    expenses,
    addExpense,
    addBulkExpenses,
    getExpensesByMonth,
    loadExpenses,
    getCurrentMonth,
    getCategoryWiseExpenses,
    getBulkExpenses,
    getExpense,
    getExpenseWithCategory,
  };
};
