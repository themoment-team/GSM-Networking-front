'use client';

import * as S from './style';

import {
  Header,
  SubFunctionHeader,
  PostContent,
  CommentCard,
  MiniProfile,
  ChattingButton,
} from '@/components';
import type { PostType, CommentType } from '@/types';

interface Props {
  initialData: PostType[];
}

const PREV_PATH = 'community/board/list' as const;

const CommentData1: CommentType = {
  id: 0,
  profile: {
    name: '이승제',
    generation: 6,
  },
  createdAt: new Date(),
  content:
    '커뮤니티는 공동의 관심사를 가진 사람들이 소통하고 협력하는 공간입니다. 지역, 온라인, 직업, 취미 등에서 형성되며 지식과 경험을 공유하고 서로 지원하는 곳입니다. 토론, 학습, 문화 교류 등을 통해 다양성과 포용성을 존중하며 구성원들이 발전하고 성장하는 공동체입니다.',
};

const CommentData2: CommentType = {
  id: 0,
  profile: {
    name: '이승제',
    generation: 6,
  },
  createdAt: new Date(),
  content:
    '커뮤니티는 공동의 관심사를 가진 사람들이 소통하고 협력하는 공간입니다. 지역, 온라인, 직업, 취미 등에서 형성되며 지식과 경험을 공유하고 서로 지원하는 곳입니다. 토론, 학습, 문화 교류 등을 통해 다양성과 포용성을 존중하며 구성원들이 발전하고 성장하는 공동체입니다.',
  comments: [
    {
      mention: '6기 이승제',
      id: 1,
      profile: {
        name: '이승제',
        generation: 6,
      },
      createdAt: new Date(),
      content:
        '커뮤니티는 공동의 관심사를 가진 사람들이 소통하고 협력하는 공간입니다. 지역, 온라인, 직업, 취미 등에서 형성되며 지식과 경험을 공유하고 서로 지원하는 곳입니다. 토론, 학습, 문화 교류 등을 통해 다양성과 포용성을 존중하며 구성원들이 발전하고 성장하는 공동체입니다.',
    },
    {
      id: 2,
      profile: {
        name: '이승제',
        generation: 6,
      },
      createdAt: new Date(),
      content:
        '커뮤니티는 공동의 관심사를 가진 사람들이 소통하고 협력하는 공간입니다. 지역, 온라인, 직업, 취미 등에서 형성되며 지식과 경험을 공유하고 서로 지원하는 곳입니다. 토론, 학습, 문화 교류 등을 통해 다양성과 포용성을 존중하며 구성원들이 발전하고 성장하는 공동체입니다.',
    },
  ],
};

const Mock: PostType = {
  id: 'abc',
  createdAt: new Date(),
  title:
    '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고',
  description:
    '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의목표를달성하거나지식을나누며함께성장합니다.이는문화적,사회적차원에서다양성을존중하고유대감을형성하며,새로운아이디어를육성하고진보하는데중요한역할을합니다.상호작용과협력을통해커뮤니티는멤버들의참여와기여를촉진하며,함께하는경험을즐커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의목표를달성하거나지식을나누며함께성장합니다.이는문화적,사회적차원에서다양성을존중하고유대감을형성하며,새로운아이디어를육성하고진보하는데중요한역할을합니다.상호작용과협력을통해커뮤니티는멤버들의참여와기여를촉진하며,함께하는경험을즐커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로,다양한경험과지식을교환하며서로를돕고이해하는장소입니다.온라인이나오프라인에서형성되며,멤버들은공동의',
  category: 'QnA',
  comments: [CommentData1, CommentData2],
  user: {
    id: 1,
    generation: 6,
    name: '이승제',
  },
};

const Gwangya: React.FC<Props> = () => (
  <>
    <Header />
    <S.Container>
      <SubFunctionHeader prevPath={PREV_PATH} title='글' />
      <S.WriterProfileWrapper>
        <MiniProfile profile={Mock.user} />
        <ChattingButton onClick={() => {}} />
      </S.WriterProfileWrapper>
      <PostContent
        title={Mock.title}
        description={Mock.description}
        category={Mock.category}
      />
      {Mock.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </S.Container>
  </>
);

export default Gwangya;
