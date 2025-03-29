import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Expense {
  id: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: string;
  time: Date;
}

export const useGetExpensesQuery = (userId: string, month?: string) => {
  console.log("userId", userId, "month", month);
  // Use a fallback value if the environment variable is not defined
  const baseUrl = `${process.env['EXPO_PUBLIC_BASE'] || 'http://localhost:3000'}/expenses/${userId}`;
  const url = month ? `${baseUrl}?month=${month}` : baseUrl;

  const { data, isLoading, error, refetch } = useQuery<Expense[]>({
    queryKey: ["expenses", userId, month],
    queryFn: async () => {
      try {
      console.log("fetching from url", url);
      const response = await axios.get(url);
      console.log("response🥲🥲🥲🥲🥲🥲🥲", response);
      if (!response.data) throw new Error("Failed to fetch expenses");
      return response.data;
      } catch (error: unknown) {
        console.log("error", error);
        throw new Error("Failed to fetch expenses");
      }
    },
    retry: 3,
  });

  console.log("data", {data, isLoading, error});

  return { data, isLoading, error, refetch };
};
