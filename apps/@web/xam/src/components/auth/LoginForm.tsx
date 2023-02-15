/** @jsxImportSource @emotion/react */

import { Button, Space } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const navigate = useNavigate();

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
    navigate('/usersetting');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '300px',
      }}>
      <div>
        <h1 style={{ paddingTop: '100px', color: '#FF8C00' }}>XAM!</h1>
      </div>
      <div
        style={{
          display: 'flex',
          width: '30%',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'gray',
          border: 'solid',
          borderRadius: '40px',
          padding: '20px',
          margin: '50px',
        }}>
        <div>
          <div>Email</div>
          <input
            style={{ width: '300px', height: '30px', border: 'none', backgroundColor: '#EEE8AA' }}
            onChange={onEmail}
            value={email}
            type="text"
            placeholder="이메일"
          />
          <div>Password</div>
          <input
            style={{ width: '300px', height: '30px', border: 'none', backgroundColor: '#EEE8AA' }}
            onChange={onPassword}
            value={password}
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
          <Link
            style={{ margin: '10px', height: '20px', textDecoration: 'none', color: '#8B4513' }}
            to="/findId">
            아이디 찾기
          </Link>
          <Link
            style={{ margin: '10px', textDecoration: 'none', color: '#8B4513' }}
            to="/findPassword">
            비밀번호변경
          </Link>
        </div>
        <Space direction="vertical">
          <Button
            style={{ backgroundColor: '#8B4513', marginBottom: '10px', width: '200px' }}
            type="primary"
            block
            onClick={onSubmit}>
            로그인
          </Button>
        </Space>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '300px',
        }}>
        <div>아직 회원이 아니신가요?</div>
        <Link style={{ margin: '10px', textDecoration: 'none', color: '#8B4513' }} to="/join">
          JOIN
        </Link>
      </div>
    </div>
  );
}
