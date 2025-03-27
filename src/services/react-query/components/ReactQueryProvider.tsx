import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { reactQueryClient } from '../reactQueryClient';

import { ReactQueryDevtools } from './ReactQueryDevTools';

interface IReactQueryProviderProps {
  /**
   * The children elements to consume the provider content.
   */
  children: ReactNode;
  /**
   * Since DevTools with react-query are rendered as HTML dom elements for the
   * web, we need to disable this feature for native.
   *
   * Read more here - https://tanstack.com/query/v/docs/react/react-native
   */
  hasDevTools?: boolean;
}

/**
 * -----------------------------------------------------------------------------
 * This wraps around the parts of the application that should consume get access
 * to the query client and cache.
 */
export function ReactQueryProvider({ children, hasDevTools = true }: IReactQueryProviderProps) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      {children}
      {hasDevTools ? <ReactQueryDevtools /> : null}
    </QueryClientProvider>
  );
}
