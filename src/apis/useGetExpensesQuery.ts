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

export const useGetExpensesQuery = (userId: string, startDate?: Date, endDate?: Date) => {
  console.log("userId", userId, "startDate", startDate, "endDate", endDate);
  // Use a fallback value if the environment variable is not defined
  const baseUrl = `${process.env.EXPO_PUBLIC_BASE as string || 'http://localhost:3000'}/expenses/${userId}`;
  
  // Build the URL with query parameters
  let url = baseUrl;
  const params = new URLSearchParams();
  
  if (startDate) {
    params.append('startDate', startDate.toISOString());
  }
  
  if (endDate) {
    params.append('endDate', endDate.toISOString());
  }
  
  const queryString = params.toString();
  if (queryString) {
    url = `${baseUrl}?${queryString}`;
  }

  const { data, isLoading, error, refetch, isFetching } = useQuery<Expense[]>({
    queryKey: ["expenses", userId, startDate?.toISOString(), endDate?.toISOString()],
    queryFn: async () => {
      try {
      console.log("fetching from url", url);
      const response = await axios.get(url);
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

  return { data, isLoading: isLoading || isFetching, error, refetch };
};
