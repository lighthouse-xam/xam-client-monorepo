import { useMutation } from '@tanstack/react-query';

import { postLogin, PostLoginReq, PostLoginRes } from '@services/auth';

import { useGlobalState } from '../common';

export function usePostLogin() {
  const [, setAccessToken] = useGlobalState(['accessToken'], '');

  const login = useMutation<PostLoginRes, Error, PostLoginReq>(
    ['postLogin'],
    async ({ userName, password }) => await postLogin({ data: { password, userName } }),
    {
      async onSuccess({ result, token }) {
        if (result) {
          setAccessToken(token);
        }
      },
    }
  );

  return login;
}
