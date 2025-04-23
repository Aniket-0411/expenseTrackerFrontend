import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface UpdateExpenseParams {
  id: string;
  userId: string;
  month?: string;
  head?: string;
  amount?: number;
  icon?: string;
  type?: string;
  time?: Date;
}

export const useUpdateExpenseMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
} = {}) => {
  const queryClient = useQueryClient();
  const baseUrl = process.env.EXPO_PUBLIC_BASE;

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (params: UpdateExpenseParams) => {
      const { id, ...expenseData } = params;
      const response = await fetch(`${baseUrl}/expense/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expenseData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update expense");
      }
      
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
};
