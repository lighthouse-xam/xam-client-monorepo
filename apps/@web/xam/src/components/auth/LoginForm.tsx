/** @jsxImportSource @emotion/react */

import { Button, Space } from 'antd';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import * as S from './LoginForm.styled';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const navigate = useNavigate();
  // const login = usePostLogin();

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const onSubmit = () => {
    // const data: PostLoginReq = {
    //   email: email,
    //   password: password,
    // };
    // login.mutate(data, {
    //   onError: () => {
    //     alert('로그인에 실패하였습니다.');
    //   },
    //   onSuccess: (res) => {
    //     localStorage.setItem('token', res.data.accessToken);
    //     alert('환영합니다!');
    //     navigate('/home');
    //   },
    // });
  };

  return (
    <div css={S.formLayout}>
      <h1>XAM!</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <input onChange={onEmail} value={email} type="text" placeholder="이메일" />
        <input onChange={onPassword} value={password} type="text" placeholder="비밀번호" />
      </div>
      <br />
      <Space direction="vertical">
        <Button type="primary" block onClick={onSubmit}>
          로그인
        </Button>
      </Space>
    </div>
  );
}
