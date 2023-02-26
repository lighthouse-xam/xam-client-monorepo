/** @jsxImportSource @emotion/react */

import { Button } from 'antd';
import { useState } from 'react';

export function UserSetting() {
  const [userId, setUserId] = useState('');
  const [photo, setPhoto] = useState('');
  const [interest, setInterest] = useState('');

  const onUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
    //영어+숫자만 사용 가능 -> 정규식 사용
    setUserId(event.target.value);
    if (userId.match(/^a-zA-Z0-9/g)) return;
  };
  const onPhoto = (event: React.ChangeEvent<HTMLInputElement>) => setPhoto(event.target.value);
  const onInterest = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInterest(event.target.value);

  const onDuplication = () => {
    //중복 확인
    const test = 'test12';
    if (test == userId) {
      alert('이미 존재하는 ID 입니다.');
    } else {
      alert('사용 가능한 ID 입니다!');
    }
  };

  return (
    <div>
      <div>
        <h1>Xam에 오신 것을 환영합니다!</h1>
      </div>
      <div>
        <input
          style={{ width: '300px', height: '30px', border: 'none', backgroundColor: '#EEE8AA' }}
          onChange={onUserId}
          value={userId}
          type="text"
          placeholder="아이디"
        />
        <Button onClick={onDuplication}>중복 확인</Button>
        <input onChange={onPhoto} value={photo} type="text" placeholder="Photo" />
        <input onChange={onInterest} value={interest} type="text" placeholder="관심사" />
        <Button>Xam 시작하기</Button>
      </div>
    </div>
  );
}
