import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUser } from "~/services";
import { EXPO_PUBLIC_BASE } from "@env";

export const useAddUserMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const baseUrl = EXPO_PUBLIC_BASE;

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (newUser: IUser & { serverAuthCode: string }) => {
      console.log("newUser", newUser);
      const response = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error("Failed to add/update user");
      return response.json();
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
