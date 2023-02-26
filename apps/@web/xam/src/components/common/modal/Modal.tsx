import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';

import { useGlobalState } from '@hooks/queries';

export interface ModalRef<C = object> {
  open: (viewProps: C) => void;
  close: () => void;
}
export type ModalProps<P = object> = AntdModalProps &
  P & {
    modalQueryKey: string;
  };

export function Modal({ modalQueryKey, ...props }: ModalProps) {
  const [isModalVisible, setModalVisible] = useGlobalState(['modal', modalQueryKey], false, false);

  return (
    <AntdModal
      destroyOnClose={true}
      footer={null}
      maskStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
      {...props}
      open={isModalVisible}
      onCancel={(e) => {
        props.onCancel && props.onCancel(e);
        setModalVisible(false);
      }}>
      {props.children}
    </AntdModal>
  );
}
