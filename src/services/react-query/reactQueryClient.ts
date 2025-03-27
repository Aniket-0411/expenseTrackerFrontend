import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

/**
 * -----------------------------------------------------------------------------
 * This creates the application react query client.
 * Please configure all the global parameters to the query here.
 */
export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      retry: 3,
      staleTime: 5 * 1000,
    },
  },
});

/**
 * -----------------------------------------------------------------------------
 * This creates a function that will generate the query client with the passed
 * options.
 */
export function createQueryClient(options?: QueryClientConfig) {
  return new QueryClient(options);
}
