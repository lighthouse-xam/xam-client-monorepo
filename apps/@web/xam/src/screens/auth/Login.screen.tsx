import { Button, Form, Input } from 'antd';

import { Text, View } from '@components/common';

export function LoginScreen() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{ paddingTop: 200, alignItems: 'center', borderColor: '#616161', borderRadius: 10 }}>
        <Text
          fontStyle="h1"
          color={'white'}
          style={{
            paddingHorizontal: 50,
            paddingVertical: 5,
            margin: 50,
            backgroundColor: '#EF933A',
            borderRadius: 10,
          }}>
          Xam!
        </Text>
        <View style={{ flexDirection: 'column' }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button style={{ backgroundColor: '#EF933A' }} type="primary" htmlType="submit">
                로그인
              </Button>
            </Form.Item>
          </Form>
          <View>
            <Text>아직 회원이 아닌가요?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
