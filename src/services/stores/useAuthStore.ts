import { create } from "zustand";
import { MMKV } from "react-native-mmkv";
import { createJSONStorage, persist } from "zustand/middleware";

export interface IUser {
  id: string;
  email: string;
  givenName: string;
  familyName: string;
  name: string;
  photo: string;
}

export interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  setUser: (user: IUser, tokens: { accessToken: string; refreshToken?: string }) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

// Initialize MMKV
const storage = new MMKV({
  id: 'auth-storage',
  encryptionKey: 'expense-tracker-secret-key'
});

// Create storage object
const zustandStorage = {
  setItem: (name: string, value: string) => storage.set(name, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (name: string) => storage.delete(name),
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: true,

      setUser: (user, tokens) =>
        set({
          user,
          accessToken: tokens?.accessToken || null,
          refreshToken: tokens?.refreshToken || null,
          isLoading: false,
        }),

      logout: () => set({ user: null, accessToken: null, refreshToken: null }),
      
      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
