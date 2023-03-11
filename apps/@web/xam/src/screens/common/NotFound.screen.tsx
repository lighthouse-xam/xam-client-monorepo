import { Text, View, Screen, Modal, ModalRef } from '@components/common';
import { forwardModalRef } from '@helpers/modal';
import { useModal } from '@hooks/modal';
import { Button, Space } from 'antd';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFoundScreen() {
  const navigate = useNavigate();

  const inquiryModalRef = useRef<ModalRef>(null);

  return (
    <Screen footer fullSize>
      <InquiryModal modalQueryKey="InquiryModal" ref={inquiryModalRef} />

      <Text fontWeight="bold" style={{ fontSize: 100, marginBottom: 8 }}>
        404
      </Text>
      <Text fontStyle="large" style={{ marginBottom: 42 }}>
        이 페이지는 듣도보도 못한 페이진데요?
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          paddingBottom: 4,
          paddingHorizontal: 4,
        }}>
        <Space size={100}>
          <Button size="small" type="text" onClick={() => inquiryModalRef.current?.open({})}>
            문의하기
          </Button>

          <Button size="small" type="text" onClick={() => navigate('/')}>
            홈페이지로 돌아가기
          </Button>
        </Space>
      </View>
    </Screen>
  );
}

const InquiryModal = forwardModalRef<{}>((modalProps, ref) => {
  useModal(modalProps.modalQueryKey, ref);

  return (
    <Modal {...modalProps} title="문의하기">
      <Text>아직 준비중인 기능입니다.</Text>
    </Modal>
  );
});
