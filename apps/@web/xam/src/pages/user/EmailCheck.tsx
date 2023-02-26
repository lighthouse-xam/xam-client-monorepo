export function EmailCheck() {
  const email = 'test@naver.com';
  return (
    <div>
      <div>
        <h1>Xam에 오신것을 환영합니다-!</h1>
        <div>`${email}로 코드를 전송해드렸어요`</div>
        <div>
          <h1>이메일이 오지 않았다면?</h1>
          <p>이메일 수신까지 일정 시간이 소요될 수 있습니다.</p>
          <p>오랜 시간 후에도 도착하지 않는다면, 아래 사항을 확인해주세요.</p>

          <ul>
            <li>이메일 주소가 올바른 형식인지 확인</li>
            <li>스팸 메일함, 스팸 설정, 남은 용량 등 확인</li>
            <li>다른 개인 이메일로 학교 이메일에 메일을 발송하여, 정상적으로 수신되는지 확인</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
