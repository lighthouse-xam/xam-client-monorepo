import axios from 'axios';

interface LoginData {
  // 클라이언트 데이터 형식
  id: string;
  password: string;
}

interface PostLoginRes {
  //서버 데이터 형식
  result: boolean;
  data: {
    refreshToken: string;
    accessToken: string;
  };
}

export function postLogin(data: LoginData) {
  const res = axios.post<PostLoginRes>('https://kacpta-stg.mommoss.com/api/v3/auth/login', data);
  return res;
}
