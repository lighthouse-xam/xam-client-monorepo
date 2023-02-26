import { createAPIService } from '@client/axios';

export interface PostLoginReq {
  userName: string;
  password: string;
}
export interface PostLoginRes {
  result: boolean;
  token: string;
}

export const postLogin = createAPIService<PostLoginRes, PostLoginReq>()({
  config: { method: 'POST', url: '/houscanner-service/auth/login' },
});
