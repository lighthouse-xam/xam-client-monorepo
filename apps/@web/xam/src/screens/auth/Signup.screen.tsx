import { Input, Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Screen, Text, View } from '@components/common';

export function SignupScreen() {
  const navigate = useNavigate();
  const onFinish = () => {
    navigate('./success');
  };

  return (
    <Screen footer fullSize>
      <Text fontStyle="h1" fontWeight="bold" style={{ marginBottom: 42 }}>
        회원가입
      </Text>

      <View style={{ width: 360 }}>
        <Form labelCol={{ span: 7 }} onFinish={onFinish}>
          <Form.Item
            label="이메일"
            name="email"
            rules={[{ required: true, message: '이메일을 입력해주세요.' }]}>
            <Input placeholder="이메일을 입력해주세요." />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}>
            <Input.Password placeholder="이메일을 입력해주세요." />
          </Form.Item>

          <Form.Item
            label="비밀번호 확인"
            name="rePassword"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            style={{ marginBottom: 48 }}>
            <Input.Password placeholder="비밀번호 입력해주세요." />
          </Form.Item>

          <Form.Item>
            <View style={{ alignItems: 'flex-end' }}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{ fontWeight: 'bold', width: 255 }}>
                회원가입
              </Button>
            </View>
          </Form.Item>
        </Form>
      </View>
    </Screen>
  );
}
