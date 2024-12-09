'use client';

import { Header, WriteButton, BoardList } from '@/components';
import * as S from '@/pageContainer/community/board/style';
import { CategoryType } from '@/types';
import type { BoardInfoType } from '@/types';

interface Props {
  initialData: BoardInfoType[];
}

const GwangjangBoard: React.FC<Props> = ({ initialData }) => (
  <>
    <Header />
    <S.Container>
      <S.TitleBox>
        <S.Title>광장</S.Title>
      </S.TitleBox>
      <BoardList
        initialData={initialData}
        selectedCategory={CategoryType.광장}
      />
      <S.ButtonWrapper>
        <WriteButton />
      </S.ButtonWrapper>
    </S.Container>
  </>
);

export default GwangjangBoard;
