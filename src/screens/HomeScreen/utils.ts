import { loadLocalData, saveLocalData } from '~/utils';

export function saveForcedPasswordResetStatus(isForcedReset: boolean) {
  saveLocalData('FORCED_RESET', isForcedReset);
}

export function loadForcedPasswordResetStatus() {
  return loadLocalData('FORCED_RESET');
}
