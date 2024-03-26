'use client';

import { useParams } from 'next/navigation';

import * as S from './style';

import { Header, SubFunctionHeader, CommentCard } from '@/components';
import type { PostType, CommentType } from '@/types';

interface Props {
  initialData: PostType[];
}

const PREV_PATH = '/community/board/' as const;

const CommentData: CommentType = {
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

const AddComment: React.FC<Props> = () => {
  const { postId } = useParams();

  return (
    <S.Container>
      <Header />
      <S.PostContainer>
        <SubFunctionHeader prevPath={PREV_PATH + postId} title='댓글' />
        <S.CommentContainer>
          <CommentCard comment={CommentData} />
        </S.CommentContainer>
      </S.PostContainer>
    </S.Container>
  );
};

export default AddComment;
