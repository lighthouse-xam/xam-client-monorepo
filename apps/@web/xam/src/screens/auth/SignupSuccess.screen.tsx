import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Screen, Text, View } from '@components/common';

export function SignupSuccessScreen() {
  const navigate = useNavigate();

  return (
    <Screen footer fullSize>
      <Text fontStyle="h1" fontWeight="bold" style={{ marginBottom: 42 }}>
        환영합니다.
      </Text>
      <Text fontStyle="h3" fontWeight="bold" style={{ marginBottom: 42 }}>
        이메일을 확인해주세요.
      </Text>

      <Text style={{ marginBottom: 84 }}>
        받으신 이메일에서 인증 버튼을 클릭하시면, 회원가입이 완료됩니다.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          paddingBottom: 4,
          paddingHorizontal: 4,
        }}>
        <Button size="small" type="text" onClick={() => navigate('/')}>
          홈페이지로 돌아가기
        </Button>
      </View>
    </Screen>
  );
}
