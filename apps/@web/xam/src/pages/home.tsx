import { Button, Divider, Form, notification, Space, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, ModalRef, ModalViewItem } from '../components/common';
import { forwardModalRef } from '../helpers/modal';
import { useModal } from '../hooks/modal';

export function Home() {
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navigate = useNavigate();
  useEffect(() => {
    // if (!localStorage.getItem('token')) navigate('/login');
  }, []);

  const ref = useRef<ModalRef>(null);

  return (
    <div>
      <div style={{ height: '100%' }}>
        <header style={{ backgroundColor: 'black' }}>
          <h1 style={{ color: 'white' }}>{'test@gmail.com'}, Hello!</h1>
        </header>
      </div>
      <Divider />
      <div>
        <div style={{ marginBottom: 16 }}>테스트용 버튼</div>
        <Space>
          <Button
            onClick={() => {
              console.log({ res: ref.current?.open });
              ref.current?.open({});
            }}>
            첫 접속시 모달
          </Button>
          <Button
            onClick={() => {
              navigate('/verify/test-code');
            }}>
            이메일 인증 버튼 클릭 시
          </Button>
        </Space>
      </div>
      <Divider />
      <OnboardingModal ref={ref} modalQueryKey="OnboardingModal" width="80%" />

      <div>
        <Space direction="vertical">
          <Button block onClick={logout}>
            로그아웃
          </Button>
        </Space>
      </div>
    </div>
  );
}
export default Home;

// interface OnboardingModalRef
interface PutMyUserInfoFormType {}
const OnboardingModal = forwardModalRef((modalProps, ref) => {
  const [, close] = useModal(modalProps.modalQueryKey, ref);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onFinish = (payload: PutMyUserInfoFormType) => {
    notification.info({
      message: 'payload',
      description: JSON.stringify({ ...payload, selectedTags }),
    });
    close();
  };

  const tagList = ['개발', '미술', '음악', '기획', '전시', '경제'];

  return (
    <Modal {...modalProps}>
      <Form onFinish={onFinish} autoComplete="off">
        <div style={{ fontSize: 16, fontWeight: 'bold' }}>추가 정보 입력 및 관심사 추가</div>

        <Divider />

        <div style={{ flex: 1, flexDirection: 'row' }}>
          <ModalViewItem required label="이름 (도메인)" keyName="userName" />
        </div>

        <div>
          <div style={{ marginBottom: 8 }}>관심사를 선택 해주세요. (최대 3개)</div>
          {tagList.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) =>
                setSelectedTags((prev) =>
                  checked ? [...prev, tag] : prev.filter((p) => tag !== p)
                )
              }>
              {tag}
            </Tag.CheckableTag>
          ))}
        </div>

        <Divider />

        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                저장하기
              </Button>
              <Button size="large" onClick={close}>
                나중에 하기
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
});
