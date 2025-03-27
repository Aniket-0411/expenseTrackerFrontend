import { Dimensions } from 'react-native';
import { isTablet as isDeviceTablet } from 'react-native-device-info';

/**
 * Create Primitives to test override tablet & landscape styles.
 */
export const isTablet = isDeviceTablet();

/**
 * Coverts the boolean check for the tablet to determine if it's a string or not.
 */
export const isTabletAsString = isTablet.toString();

/**
 * MMKV Storage `key` that is used to track the current saved app wide
 * `Theme Setting` in Memory and allows to configure the light and dark theme.
 */
export const SETTING_CURRENT_THEME = '@USER_SETTING/THEME/CURRENT_THEME';

/**
 * MMKV Storage `key` that is used to track whether the user wants te bottom
 * `Tab Labels` to be visible or hidden
 */
export const SETTING_SHOW_LABELS = '@USER_SETTING/THEME/SHOW_LABELS';

/**
 * Determines the percentage global width of the lottie animations used in page
 * loaders. To be a bit smaller ratio on tablet devices.
 */
export const ANIMATION_LOADER_WIDTH = isTablet ? '34%' : '64%';

/**
 * Dictates the width of the modal. Full width on mobile and sectioned out to
 * the center on tablet.
 */
export const MODAL_WIDTH = isTablet ? '64%' : '100%';

/**
 * Provides the width of the window, that can be used outside react components.
 * Prefer `useWindowDimensions` is used within react components.
 */
export const windowWidth = Dimensions.get('window').width;

/**
 * Provides the height of the window, that can be used outside react components.
 * Prefer `useWindowDimensions` is used within react components.
 */
export const windowHeight = Dimensions.get('window').height;
