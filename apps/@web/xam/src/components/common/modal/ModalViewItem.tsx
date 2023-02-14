import { Form, Input } from 'antd';

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
    // paddingHorizontal: 8
    <div style={{ flex: 1 }}>
      <div style={{ marginBottom: 8 }}>
        {/* fontWeight="semiBold" */}
        {label}
      </div>
      <Form.Item
        name={keyName}
        rules={required ? [{ required: true, message: '필수 입력 항목입니다.' }] : undefined}
        style={{ marginBottom: '16px' }}>
        <_Input size="large" placeholder={label} rows={rows} />
      </Form.Item>
    </div>
  );
}
