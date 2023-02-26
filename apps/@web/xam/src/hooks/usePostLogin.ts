import { useMutation } from '@tanstack/react-query';

import { postLogin } from '../services/postLogin';

export function usePostLogin() {
  const res = useMutation(['Login'], postLogin);
  return res;
}
