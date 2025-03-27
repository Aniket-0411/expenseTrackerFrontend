import * as SecureStore from 'expo-secure-store';

export interface ISaveToSecureStorage {
  key: string;
  value: string;
  options?: SecureStore.SecureStoreOptions;
}

export async function saveToSecureStore({
  key,
  value,
  options,
}: ISaveToSecureStorage): Promise<void> {
  await SecureStore.setItemAsync(key, value, options);
}

export async function getValueFromSecureStore(key: string): Promise<string | null> {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  }
  return null;
}
