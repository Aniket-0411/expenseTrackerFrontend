/* eslint-disable @typescript-eslint/indent */

import { UseQueryOptions, QueryKey } from '@tanstack/react-query';

import { IApiError } from '~/utils';


import { useQuery } from './reactQueryHooks';

/**
 * `useQueryWithUserId` is a copy of reactQuery useQuery function with custom userId
 * for session api, state, cache management
 */
export const useQueryWithUserId = <
  TQueryFnData = unknown,
  TError = IApiError,
  TData = TQueryFnData,
>({
  queryKey = [],
  ...rest
}: UseQueryOptions<TQueryFnData, TError, TData>) => {
  const key: QueryKey = [...queryKey];

  return useQuery({
    ...rest,
    queryKey: key,
  });
};
