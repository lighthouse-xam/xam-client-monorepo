import { Avatar, Button, Input, Space } from 'antd';
import { Pressable, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-dom';

import { useGlobalState } from '@hooks/queries';

import { Text } from '../text';
import { View } from '../view';

interface ScreenProps {
  children: React.ReactNode;
  header?: true | React.ReactNode;
  footer?: true | React.ReactNode;
  fullSize?: boolean;
}
export function Screen({ children, header, footer, fullSize }: ScreenProps) {
  return (
    <View style={{ height: '100%' }}>
      {header && typeof header === 'boolean' ? <Header /> : header}
      <View
        style={[
          { justifyContent: 'center', alignItems: 'center' },
          fullSize ? { flex: 1, overflow: 'hidden' } : {},
        ]}>
        {children}
      </View>
      {footer && typeof footer === 'boolean' ? <Footer /> : footer}
    </View>
  );
}

function Header() {
  const [accessToken, setAccessToken] = useGlobalState(['accessToken'], '');
  const navigate = useNavigate();

  return (
    <View
      style={{
        height: 76,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 1200,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text fontStyle="h1" fontWeight="bold">
          잼
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Input placeholder="잼의 모든 글 검색" style={{ marginRight: 24 }} />

          {accessToken ? (
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <Pressable onPress={() => navigate('/profile')}>
                <View
                  style={{ width: 48, height: 48, borderRadius: 20, backgroundColor: '#caaeae' }}
                />
              </Pressable>
              <Button type="text" onClick={() => navigate('/profile')}>
                프로필
              </Button>
              <Button onClick={() => setAccessToken('')}>로그아웃</Button>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Button type="text" onClick={() => navigate('/auth/signup')}>
                회원가입
              </Button>
              <Button onClick={() => navigate('/auth/login')}>로그인</Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        paddingHorizontal: 32,
        alignItems: 'center',
      }}>
      <Text style={{ marginRight: 16 }}>© 2023 SpotLight</Text>
      <Button
        type="text"
        onClick={() => (window.location.href = 'https://github.com/spotlight-xam')}>
        Github
      </Button>
    </View>
  );
}
