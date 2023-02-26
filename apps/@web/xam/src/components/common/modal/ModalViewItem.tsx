import { Form, Input } from 'antd';

import { Text } from '../text';
import { View } from '../view';

interface ModalViewItemProps {
  keyName: string;
  label: string;
  required?: boolean;
  isPassword?: boolean;
  rows?: number;
}
export function ModalViewItem({ required, keyName, label, isPassword, rows }: ModalViewItemProps) {
  const _Input = rows ? Input.TextArea : isPassword ? Input.Password : Input;
  return (
    <View style={{ flex: 1, paddingHorizontal: 8 }}>
      <Text fontWeight="semiBold" style={{ marginBottom: 8 }}>
        {label} {required && <Text color="red">*</Text>}
      </Text>
      <Form.Item
        name={keyName}
        rules={required ? [{ required: true, message: '필수 입력 항목입니다.' }] : undefined}
        style={{ marginBottom: '16px' }}>
        <_Input size="large" placeholder={label} rows={rows} />
      </Form.Item>
    </View>
  );
}
