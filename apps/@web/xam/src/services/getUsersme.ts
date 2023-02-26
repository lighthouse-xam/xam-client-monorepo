import axios from 'axios';

interface getUsermeRes {
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
export function getUsersme() {
  const res = axios.get<getUsermeRes>('https://kacpta-stg.mommoss.com/api/v1/users/me', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
  });
  return res;
}
