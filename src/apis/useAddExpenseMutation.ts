import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface Expense {
  userId: string;
  month: string;
  head: string;
  amount: number;
  icon: string;
  type: string;
  time: Date;
}

export const useAddExpenseMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const baseUrl = process.env.EXPO_PUBLIC_BASE;

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (newExpense: Expense) => {
      console.log("newExpense", newExpense, baseUrl);
      const response = await fetch(`${baseUrl}/expense`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });
      if (!response.ok) throw new Error("Failed to add expense");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return { mutate, isPending, isSuccess, error };
}
