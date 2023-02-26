/** @jsxImportSource @emotion/react */

import { Button, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useInputForm } from '../../hooks/useInputForm';
import { usePostLogin } from '../../hooks/usePostLogin';

export function LoginForm() {
  const [email, setEmail] = useInputForm();
  const [password, setPassword] = useInputForm();

  const LoginMutation = usePostLogin();
  const navigate = useNavigate();
  const onSubmit = () => {
    const data = {
      id: email,
      password,
    };
    LoginMutation.mutate(data, {
      onError: () => {
        alert('로그인 Error');
      },
      onSuccess: (res) => {
        console.log(res);
        alert('환영합니다!');
        localStorage.setItem('accessToken', res.data.data.accessToken);
        navigate('/home');
      },
    });
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
        <h1 style={{ paddingTop: '100px', color: '#FF8C00' }}>내 손 안의 XAM!</h1>
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
            onChange={setEmail}
            value={email}
            type="text"
            placeholder="이메일"
          />
          <div>Password</div>
          <input
            style={{ width: '300px', height: '30px', border: 'none', backgroundColor: '#EEE8AA' }}
            onChange={setPassword}
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
