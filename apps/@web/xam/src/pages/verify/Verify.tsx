import { Button, notification, Space } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Verify() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) {
      notification.error({ message: '잘못된 접근 입니다.' });
      navigate('/home');
    }
  }, [code]);

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
      }}>
      <h1 style={{ padding: 32 }}>인증 되었습니다. b</h1>

      <Button size="large" onClick={() => navigate('/home')}>
        메인으로 이동
      </Button>
    </div>
  );
}
