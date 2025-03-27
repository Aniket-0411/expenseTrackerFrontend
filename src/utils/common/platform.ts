/**
 * This utility is used to determined if the app environment variable is set to
 * be running on `web` using `NEXT_PUBLIC_IS_WEB_APP`.
 *
 * - Note: This should also be set up in the respective `.env` files.
 */
export const isWeb = process.env.NEXT_PUBLIC_IS_WEB_APP === 'true';

/**
 * This utility is used to determined if the app environment variable is set to
 * be running on `mobile` by checking if it's not running on `web`.
 *
 * - Added as a convenience to avoid having to write `!isWeb` everywhere.
 */
export const isMobile = !isWeb;
