'use client';

import * as S from './style';

import { CloseIcon } from '@/assets';
import { ReverseCategoryType } from '@/types';
import type { CategoryFilterType } from '@/types';

const CATEGORY_LIST: string[] = [
  '전체',
  ...Object.values(ReverseCategoryType),
] as const;

interface Props {
  selectedCategory: CategoryFilterType | null;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryFilterType | null>
  >;
}

const BoardFilterModal: React.FC<Props> = ({
  setIsShowFilterModal,
  selectedCategory,
  setSelectedCategory,
}) => {
  const closeModal = () => {
    setIsShowFilterModal(false);
  };

  const handleCategoryClick = (category: CategoryFilterType) =>
    setSelectedCategory((prevSelectedCategory: CategoryFilterType | null) =>
      prevSelectedCategory === category ? null : category
    );

  return (
    <S.Modal>
      <S.Top>
        <S.Title>카테고리</S.Title>
        <S.CloseButton type='button' onClick={closeModal}>
          <CloseIcon />
        </S.CloseButton>
      </S.Top>
      <S.SectionWrapper>
        <S.SectionTitle>구분</S.SectionTitle>
        <S.CategoryWrapper>
          {CATEGORY_LIST.map((category) => (
            <S.CategoryButton
              key={category}
              isSelected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </S.CategoryButton>
          ))}
        </S.CategoryWrapper>
      </S.SectionWrapper>
    </S.Modal>
  );
};

export default BoardFilterModal;
