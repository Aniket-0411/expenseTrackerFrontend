import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUser } from "~/services";

export const useAddUserMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const baseUrl = process.env.EXPO_PUBLIC_BASE || 'http://10.0.2.2:8081';

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (newUser: IUser & { serverAuthCode: string }) => {
      console.log("newUser", newUser);
      const response = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const text = await response.text();
      const isJson = response.headers.get("content-type")?.includes("application/json");
      if (!response.ok) {
        throw new Error(`Failed to add/update user: ${text}`);
      }
      if (!isJson) {
        throw new Error(`Unexpected non-JSON response: ${text}`);
      }
      return JSON.parse(text);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return { mutate, isPending, isSuccess, error };
};
