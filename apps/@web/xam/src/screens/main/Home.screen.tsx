import { Divider } from 'antd';

import { Screen, Text, View } from '@components/common';

export function HomeScreen() {
  return (
    <Screen header footer>
      <HomeSectionList />
    </Screen>
  );
}

function HomeSectionList() {
  return (
    <View style={{ gap: 56 }}>
      <HomeSection>
        <View style={{ height: 600 }}>
          <Text>이미지</Text>
        </View>
      </HomeSection>

      <HomeSection title="팀원 / 팀 모집">
        <PostList />
      </HomeSection>

      <HomeSection title="공개 포스트">
        <PostList />
      </HomeSection>
    </View>
  );
}

interface HomeSectionProps {
  title?: string;
  children: React.ReactNode;
}
function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <View>
      {title && (
        <>
          <Text fontStyle="h2" fontWeight="bold">
            {title}
          </Text>
          <Divider />
        </>
      )}
      <View>{children}</View>
    </View>
  );
}

interface PostEntity {
  title: string;
  contents: string;
}
function PostList() {
  const postList: (PostEntity | false)[][] = [
    [
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
    ],
    [
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
    ],
    [
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      {
        title: '더 쉽게! 10배 빠르게! 지식/정보 콘텐츠를 보는 요약 플랫폼',
        contents: `더 쉽고 빠른 지식/정보 콘텐츠 요약 플랫폼`,
      },
      false,
      false,
    ],
  ];

  return (
    <View style={{ height: 'auto', gap: 16, width: 1200 }}>
      {postList.map((rows) => (
        <View style={{ flexDirection: 'row', gap: 16, flex: 1 }}>
          {rows.map((post) => (
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#ddd',
                flex: 1,
                aspectRatio: 1.5 / 1,
                padding: 16,
              }}>
              {post ? (
                <View>
                  <Text>{post.title}</Text>
                  <View></View>
                </View>
              ) : (
                <View />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
