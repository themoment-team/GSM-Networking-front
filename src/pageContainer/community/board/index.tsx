'use client';

import { useState } from 'react';

import * as S from './style';

import {
  Header,
  CommunityButton,
  WriteButton,
  FilterButton,
  BoardFilterModal,
  BoardList,
} from '@/components';
import { BOARD_PATH } from '@/constants';
import { CategoryType } from '@/types';
import type { BoardInfoType } from '@/types';
import type { CategoryFilterType } from '@/types';

interface Props {
  initialData: BoardInfoType[];
}

const BUTTON_TITLE = '카테고리' as const;

const Board: React.FC<Props> = ({ initialData }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterType | null>(null);

  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);

  return (
    <>
      <Header />
      <S.Container>
        <S.TitleBox>
          <CommunityButton segment={BOARD_PATH} />
          <FilterButton
            onClick={() => setIsShowFilterModal((prev) => !prev)}
            isActive={isShowFilterModal}
            title={BUTTON_TITLE}
          />
        </S.TitleBox>
        {isShowFilterModal && (
          <BoardFilterModal
            setIsShowFilterModal={setIsShowFilterModal}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        <BoardList
          initialData={initialData}
          selectedCategory={
            selectedCategory ? CategoryType[selectedCategory] : null
          }
        />
        <S.ButtonWrapper>
          <WriteButton path='/community/board' />
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default Board;
