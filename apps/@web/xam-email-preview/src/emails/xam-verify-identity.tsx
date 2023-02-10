import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Xam 회원가입 인증</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={{ marginTop: '32px' }}>
            <Img src="../static/xam-logo.png" width="100" height="100" alt="Vercel" style={logo} />
          </Section>
          <Text style={h1}>아, 오셨군요.</Text>

          <Text style={text}>홍길동님 반갑습니다. Xam에 처음이시네요.</Text>

          <Text style={text}>
            일단 저희 서비스에 회원가입 해주신것, 감사의 말씀 먼저 전하겠습니다.
            <br />
            Xam을 통해 현재 공부하고 계신 것, 프로젝트 진행하고 계신것들을 마음껏 공유해주시면
            됩니다.
          </Text>

          <Text style={text}>
            이후 자신의 글을 바탕으로 자신만의 포트폴리오를 만들어보세요! (예정)
          </Text>

          <Text style={text}>
            Xam를 이용해 자신을 나타내려면 아래 버튼을 눌러 이메일 인증을 완료 해주세요.
          </Text>

          <Section style={{ textAlign: 'center' }}>
            <Button pX={20} pY={12} style={btn} href="https://vercel.com/teams/invite/foo">
              이메일 인증하기
            </Button>
          </Section>

          <Text style={text}>
            <br />
            아니면, 아래 링크를 복사해서 사용하는 브라우저에 붙여넣으세요.{' '}
            <Link
              href="https://vercel.com/teams/invite/test"
              target="_blank"
              style={link}
              rel="noreferrer">
              https://vercel.com/teams/invite/test
            </Link>
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            <span style={black}>홍길동</span>님이 <span style={black}>2023.03.20 23:23</span>에
            회원가입을 했습니다. 본인이 시도한 경우가 아닌경우 링크를 열지 마세요. 혹시나 실수로
            인증을 완료한 경우 이 이메일로 회신해주세요.
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
};

const container = {
  border: '1px solid #eaeaea',
  borderRadius: '5px',
  margin: '40px auto',
  padding: '20px',
  width: '465px',
};

const logo = {
  margin: '0 auto',
};

const h1 = {
  color: '#000',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'normal',
  textAlign: 'center' as const,
  margin: '30px 0',
  padding: '0',
};

const avatar = {
  borderRadius: '100%',
};

const link = {
  color: '#067df7',
  textDecoration: 'none',
};

const text = {
  color: '#000',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  lineHeight: '24px',
};

const black = {
  color: 'black',
};

const center = {
  verticalAlign: 'middle',
};

const btn = {
  backgroundColor: '#000',
  borderRadius: '5px',
  color: '#fff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '50px',
  textDecoration: 'none',
  textAlign: 'center' as const,
};

const spacing = {
  marginBottom: '26px',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '26px 0',
  width: '100%',
};

const footer = {
  color: '#666666',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '24px',
};
