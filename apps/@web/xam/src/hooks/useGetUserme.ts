import { useQuery } from '@tanstack/react-query';

import { getUsersme } from '../services/getUsersMe';

export function useGetUserme() {
  const res = useQuery(['userme'], getUsersme);
  return res;
}
