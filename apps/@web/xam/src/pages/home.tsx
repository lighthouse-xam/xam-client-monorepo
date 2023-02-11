import { Button, Space } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, []);

  return (
    <>
      <div style={{ height: '100%' }}>
        <header style={{ backgroundColor: 'black' }}>
          <h1 style={{ color: 'white' }}>{'test@gmail.com'}, Hello!</h1>
        </header>
      </div>
      <div>
        <Space direction="vertical">
          <Button block onClick={logout}>
            로그아웃
          </Button>
        </Space>
      </div>
    </>
  );
}
export default Home;
