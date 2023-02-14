import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import { queryClient } from '../../queryClient/index';

export function useGlobalState<D>(
  queryKey: string[],
  defaultValue: D | (() => Promise<D>),
  isPersist = true
) {
  const _queryKey = useMemo(
    () => (isPersist ? ['persist', ...queryKey] : queryKey),
    [queryKey, isPersist]
  );

  const { data } = useQuery<D | undefined>(
    _queryKey,
    async () => {
      if (typeof defaultValue === 'function') {
        return await (defaultValue as () => Promise<D>)();
      } else {
        return defaultValue;
      }
    },
    { staleTime: Infinity, cacheTime: Infinity }
  );

  const setData = useCallback(
    (value: D) => {
      queryClient.setQueryData(_queryKey, value);
      return value;
    },
    [_queryKey]
  );

  return [data, setData] as const;
}
