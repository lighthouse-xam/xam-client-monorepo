/** @jsxImportSource @emotion/react */

import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const primary_color = '#FF8C00';
export function JoinForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passcheck, setPasscheck] = useState('');

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onPasscheck = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPasscheck(event.target.value);

  const navigate = useNavigate();
  const onSubmit = () => {
    const test = 'test@naver.com';
    if (test == email) {
      alert('이미 존재하는 회원 이메일입니다');
    } else {
      navigate('/login');
    }
  };
  const onCheck = () => {
    //비밀번호 확인
    if (password == passcheck) {
      return 0;
    } else {
      alert('비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <>
          <div
            style={{
              display: 'flex',
              width: '40%',
              height: '100%',
              color: primary_color,
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <h1 style={{ color: primary_color, alignContent: 'center' }}>Xam!</h1>
            <div style={{ height: '40px' }}></div>
            <div
              style={{
                display: 'flex',
                color: primary_color,
                flexDirection: 'column',
                alignContent: 'center',
                padding: '30px',
              }}>
              <h2 style={{ color: primary_color }}>Create Account</h2>
              <div style={{ color: 'gray', paddingBottom: '5px' }}>Email*</div>
              <input
                style={{
                  height: '20px',
                  border: 'none',
                  backgroundColor: '#EEE8AA',
                }}
                onChange={onEmail}
                value={email}
                type="text"
              />
              <div style={{ color: 'gray', paddingBottom: '5px' }}>Password*</div>
              <input
                style={{ height: '20px', border: 'none', backgroundColor: '#EEE8AA' }}
                onChange={onPassword}
                value={password}
                type="text"
              />
              <div style={{ color: 'gray', paddingBottom: '5px' }}>Password Check*</div>
              <input
                style={{
                  height: '20px',
                  border: 'none',
                  backgroundColor: '#EEE8AA',
                }}
                onChange={onPasscheck}
                value={passcheck}
                type="text"
              />
              <Button style={{ marginTop: '10px' }} onClick={onCheck}>
                비밀번호 확인
              </Button>

              <Button
                style={{ marginTop: '10px', backgroundColor: '#8B4513' }}
                type="primary"
                block={true}
                onClick={onSubmit}>
                가입하기
              </Button>
            </div>
          </div>
        </>
        <div style={{ margin: '70px', height: '100%', width: '90%' }}>
          <div style={{ backgroundColor: '#FF8C00', height: '400px' }}></div>
        </div>
      </div>
    </div>
  );
}
