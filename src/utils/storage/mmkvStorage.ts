import { MMKV } from 'react-native-mmkv';

/**
 * This creates a reference to the `MMKV` storage engine, providing a fast &
 * synchronous storage utility.
 * TODO: Get all these encryption keys from ENV.
 *
 * - [Read MORE:](https://github.com/mrousavy/react-native-mmkv)
 */
const storage = new MMKV({
  id: 'app-global-storage',
});

/**
 * Loads a string from mmkv storage.
 *
 * @param key The key to fetch.
 */
export const loadLocalString = (key: string) => storage.getString(key);

/**
 * Loads a number from mmkv storage.
 *
 * @param key The key to fetch.
 */
export const loadLocalNumber = (key: string) => storage.getNumber(key);
/**
 * Loads a boolean from mmkv storage.
 *
 * @param key The key to fetch.
 */
export const loadLocalBoolean = (key: string) => storage.getBoolean(key);

/**
 * The type of the value stored in MMKV.
 * Read more about `Uint8Array` here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
 */
type TStoredValue = string | number | boolean | Uint8Array;

/**
 * Saves a `string`, `number`, `boolean` or `Uint8Array` to storage.
 * If you want to store an object, use `saveLocalData`.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const saveLocalPrimitive = (key: string, value: TStoredValue) => {
  storage.set(key, value);
};

/**
 * Saves an object to storage or unknown value. If you want to store a `string`,
 * `number`, `boolean` or `Uint8Array`, use `saveLocalPrimitive` instead.
 *
 * - Note: This will return `true` if the save was successful, and `false` if not.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const saveLocalData = (key: string, value: unknown) => {
  try {
    storage.set(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

/**
 * Loads something from storage and runs it thru JSON.parse.
 * This is useful if what was saved was an object and not of type `TStoredValue`.
 *
 * - Note: This will return `null` if the data could not be parsed.
 *
 * @param key The key to fetch.
 */
export const loadLocalData = <T = TStoredValue>(key: string): T | null => {
  const stringifiedData = storage.getString(key);

  try {
    if (stringifiedData) {
      return JSON.parse(stringifiedData);
    }

    return null;
  } catch {
    return null;
  }
};

/**
 * Delete a specific key + value from mmkv storage.
 *
 * REF - https://github.com/mrousavy/react-native-mmkv#keys
 *
 * @param key - The key to delete.
 */
export const removeLocalData = (key: string) => {
  storage.delete(key);
};

/**
 * Burn it all to the ground.
 *
 * REF - https://github.com/mrousavy/react-native-mmkv#keys
 */
export const clearLocalData = () => {
  storage.clearAll();
};
