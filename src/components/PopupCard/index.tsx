'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { CheckedIcon, CloseIcon, NotCheckedIcon } from '@/assets';

interface Props {
  id: number;
  boardId: number;
  title: string;
}

const POPUPLIST = 'popupList' as const;

const PopupCard: React.FC<Props> = ({ id, boardId, title }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { push } = useRouter();
  const { getItem, setItem } = localStorage;

  const handleTitleClick = () => push(`/community/board/${boardId}`);

  const handleCheckButtonClick = () => setIsChecked((prev) => !prev);

  const habdleCloseButtonClick = () => {
    if (isChecked) {
      if (getItem(POPUPLIST)) {
        const prevList: string[] = JSON.parse(getItem(POPUPLIST)!);
        const newList = JSON.stringify([...prevList, id]);
        setItem(POPUPLIST, newList);
      } else {
        const newList = JSON.stringify([id]);
        setItem(POPUPLIST, newList);
      }
    }
  };

  return (
    <S.Card>
      <S.TopSection>
        <S.Title onClick={handleTitleClick}>{title}</S.Title>
        <S.CloseButton onClick={habdleCloseButtonClick}>
          <CloseIcon />
        </S.CloseButton>
      </S.TopSection>
      <S.BottomSection>
        <S.CheckButton onClick={handleCheckButtonClick}>
          {isChecked ? <CheckedIcon /> : <NotCheckedIcon />}
        </S.CheckButton>
        다시 보지 않기
      </S.BottomSection>
    </S.Card>
  );
};

export default PopupCard;
