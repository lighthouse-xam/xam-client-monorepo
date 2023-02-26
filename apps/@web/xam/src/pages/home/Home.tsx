import { Button, Card, Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import { useGetUserme } from '../../hooks/useGetUserme';

export function Home() {
  //메인페이지 -> 피드 (공개적으로 열려있는 페이지, 대충 모양 더미데이터)
  const userme = useGetUserme();
  const navigate = useNavigate();

  const onLogin = () => {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken'); //로그아웃
      navigate('../login');
    } else navigate('../login'); //로그인
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <div>
          <h1 style={{ marginLeft: '20px', fontFamily: 'SF Pro KR' }}>Xam!</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', marginRight: '10px' }}>
            {' '}
            환영합니다! {userme.data?.data.data.name}님{' '}
          </div>
          <Button onClick={onLogin}>
            {!localStorage.getItem('accessToken') ? '로그인' : '로그아웃'}
          </Button>
        </div>
      </div>
      <div>
        <Layout className="layout">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Card title="Birthday" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>{userme.data?.data.data.birth}</p>
            </Card>
            <Card title="Email" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>{userme.data?.data.data.email}</p>
            </Card>
            <Card title="Phone Number" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>{userme.data?.data.data.hp}</p>
            </Card>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '10px',
            }}>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '10px',
            }}>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card title" bordered={false} style={{ margin: '10px', width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <Footer style={{ textAlign: 'center' }}>© xam by spotlight company</Footer>
        </Layout>
      </div>
    </div>
  );
}
