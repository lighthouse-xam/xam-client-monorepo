/** @jsxImportSource @emotion/react */
import { Button, Layout } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function FindUser() {
  const [email, setEmail] = useState('');

  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const navigate = useNavigate();

  const onFind = () => {
    const test = 'test@naver.com';
    if (test == email) {
      navigate('./findresult');
    } else {
      alert('존재하는 회원이 없습니다.');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
      }}>
      <div>
        <Layout />
        <h1>비밀번호 찾기</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          style={{
            height: '30px',
            width: '300px',
            border: 'none',
            backgroundColor: '#EEE8AA',
          }}
          onChange={onPassword}
          value={email}
          type="text"
          placeholder="이메일"
        />
        <Button style={{ marginTop: '10px', backgroundColor: '#8B4513' }} onClick={onFind}>
          비밀번호 찾기
        </Button>
      </div>
    </div>
  );
}
