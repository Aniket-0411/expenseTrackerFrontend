/**
 * This file is where we do "rehydration" of your RootStore from AsyncStorage.
 * This lets you persist your state between app launches.
 *
 * Navigation state persistence is handled in navigationUtilities.tsx.
 *
 * Note that Fast Refresh doesn't play well with this file, so if you edit this,
 * do a full refresh of your app instead.
 *
 * @refresh reset
 */
import { applySnapshot, IDisposer, onSnapshot } from 'mobx-state-tree';

import { loadLocalData, saveLocalData } from '~/utils';

import { RootStore, RootStoreSnapshot } from '../RootStore';

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root-v1';

/**
 * Setup the root state.
 */
let disposer: IDisposer | undefined;
export function setupRootStore(rootStore: RootStore) {
  let restoredState: RootStoreSnapshot | undefined | null;

  try {
    // load the last known state from AsyncStorage
    restoredState = loadLocalData(ROOT_STATE_STORAGE_KEY) ?? {};
    applySnapshot(rootStore, restoredState);
  } catch (e) {
    // if there's any problems loading, then inform the dev what happened
    if (__DEV__) {
      if (e instanceof Error) console.error(e.message);
    }
  }

  // stop tracking state changes if we've already setup
  if (disposer) disposer();

  // track changes & save to AsyncStorage
  disposer = onSnapshot(rootStore, (snapshot) => saveLocalData(ROOT_STATE_STORAGE_KEY, snapshot));

  const unsubscribe = () => {
    disposer?.();
    disposer = undefined;
  };

  return { rootStore, restoredState, unsubscribe };
}
