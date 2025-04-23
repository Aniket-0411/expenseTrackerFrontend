import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface DeleteExpenseParams {
  id: string;
  userId: string;
}

export const useDeleteExpenseMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
} = {}) => {
  const queryClient = useQueryClient();
  const baseUrl = process.env.EXPO_PUBLIC_BASE;

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async ({ id, userId }: DeleteExpenseParams) => {
      const response = await fetch(`${baseUrl}/expense/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete expense");
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
