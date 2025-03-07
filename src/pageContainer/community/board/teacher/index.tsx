'use client';

import { Header, WriteButton, BoardList } from '@/components';
import { useCheckIsTeacher } from '@/hooks';
import * as S from '@/pageContainer/community/board/style';
import { CategoryType } from '@/types';
import type { BoardInfoType } from '@/types';

interface Props {
  initialData: BoardInfoType[];
}

const TeacherBoard: React.FC<Props> = ({ initialData }) => {
  const isTeacher = useCheckIsTeacher();

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <S.Title>선생님 게시판</S.Title>
        </S.TitleBox>
        <BoardList
          initialData={initialData}
          selectedCategory={CategoryType.선생님}
        />
        {isTeacher && (
          <S.ButtonWrapper>
            <WriteButton path='/community/board' />
          </S.ButtonWrapper>
        )}
      </S.Container>
    </>
  );
};

export default TeacherBoard;
