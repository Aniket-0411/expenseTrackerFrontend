import { router, Href } from 'expo-router';

/**
 * Navigates to the specified path.
 *
 * @param path The path to navigate to a path, if it's a dynamic path, you can
 * pass an object with the path and the params.
 */
export function navigate(path: Href<string | object>) {
  router.push(path);
}

/**
 * Navigates to the previous screen in the stack.
 */
export function goBack() {
  if (router.canGoBack()) {
    router.back();
  }
}

/**
 * Resets the navigation state.
 */
export function resetRoot() {
  router.dismissAll();
}
