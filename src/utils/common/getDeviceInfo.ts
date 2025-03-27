import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

/**
 * It will provide device information.
 *
 * @returns  platform, make, appVersion, model
 */
export const getDeviceDetails = async () => {
  const platform = await DeviceInfo.getBaseOs();
  const make = await DeviceInfo.getBrand();
  const appVersion = await DeviceInfo.getVersion();
  const model = await DeviceInfo.getDeviceId();

  return { platform, make, appVersion, model };
};

/**
 * Checks whether the platform is Android
 */
export const isAndroid = Platform.OS === 'android';

/**
 * Checks whether the platform is iOS
 */
export const isIOS = Platform.OS === 'ios';

/**
 * @deprecated use `isIOS` instead
 */
export const isIos = Platform.OS === 'ios';

/**
 * Checks whether the platform is Web
 */
export const isWebPlatform = Platform.OS === 'web';
