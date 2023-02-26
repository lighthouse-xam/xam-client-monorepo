import { createAPIService } from '@client/axios';

interface GetUserMeRes {
  result: boolean;
  data: {
    id: number;
    type: number;
    nickname: string;
    name: string;
    profileImg: string;
    receiveKey: string;
    loginCount: number;
    email: string;
    hp: number;
    etc: null;
    status: 1;
    birth: string;
  };
}
export const getUserMe = createAPIService<GetUserMeRes>()({
  config: { method: 'GET', url: 'v1/users/me' },
});
