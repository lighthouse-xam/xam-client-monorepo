import { useMutation } from '@tanstack/react-query';

import { postLogin, PostLoginReq, PostLoginRes } from '@services/auth';

import { useGlobalState } from '../common';

export function usePostLogin() {
  const [, setAccessToken] = useGlobalState(['accessToken'], '');

  const login = useMutation<PostLoginRes, Error, PostLoginReq>(
    ['postLogin'],
    async ({ id, password }) => await postLogin({ data: { password, id } }),
    {
      async onSuccess({ result, data }) {
        if (result) {
          setAccessToken(data.accessToken);
        }
      },
    }
  );

  return login;
}
