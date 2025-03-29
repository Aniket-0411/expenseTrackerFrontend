import { useMutation, useQueryClient } from "@tanstack/react-query";

interface BulkExpense {
  userId: string;
  expenses: Array<{
    month: string;
    head: string;
    amount: number;
    icon: string;
    type: string;
    time: Date;
  }>;
}

export const useBulkAddExpensesMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const baseUrl = process.env.EXPO_PUBLIC_BASE;

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (bulkExpense: BulkExpense) => {
      console.log("📊📊📊📊", bulkExpense);
      const response = await fetch(`${baseUrl}/expenses/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bulkExpense),
      });
      if (!response.ok) throw new Error("Failed to bulk add expenses");
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
