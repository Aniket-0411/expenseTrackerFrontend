import { ReactQueryDevtools as RQDevTools } from '@tanstack/react-query-devtools';

/**
 * -----------------------------------------------------------------------------
 * This creates the React Query Dev tools for Debugging React Query
 */
export function ReactQueryDevtools() {
  return <RQDevTools initialIsOpen={false} />;
}
