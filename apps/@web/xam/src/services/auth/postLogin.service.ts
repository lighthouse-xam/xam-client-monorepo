import { createAPIService } from '@client/axios';

export interface PostLoginReq {
  id: string;
  password: string;
}
export interface PostLoginRes {
  result: boolean;
  data: {
    refreshToken: string;
    accessToken: string;
  };
}

export const postLogin = createAPIService<PostLoginRes, PostLoginReq>()({
  config: { method: 'POST', url: '/v3/auth/login' },
});
