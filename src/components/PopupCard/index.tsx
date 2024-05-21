'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { CheckedIcon, CloseIcon, NotCheckedIcon } from '@/assets';
import { INVISIBLEPOPUPLIST } from '@/constants';
import type { PopupType } from '@/types';
import { checkLocalstorageValue, isNumberArray } from '@/utils';

interface Props {
  id: number;
  boardId: number;
  title: string;
  setPopupList: Dispatch<SetStateAction<PopupType[]>>;
}

const PopupCard: React.FC<Props> = ({ id, boardId, title, setPopupList }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { push } = useRouter();

  const handleTitleClick = () => push(`/community/board/${boardId}`);

  const handleCheckButtonClick = () => setIsChecked((prev) => !prev);

  const handleCloseButtonClick = () => {
    if (isChecked) {
      const parsedPrevInvisiblePopuplist =
        checkLocalstorageValue(INVISIBLEPOPUPLIST);
      const invisiblePopupList =
        parsedPrevInvisiblePopuplist &&
        isNumberArray(parsedPrevInvisiblePopuplist)
          ? (parsedPrevInvisiblePopuplist as number[])
          : [];
      const newInvisiblePopupList = JSON.stringify([...invisiblePopupList, id]);
      localStorage.setItem(INVISIBLEPOPUPLIST, newInvisiblePopupList);
    }
    setPopupList((prev) => prev.filter((popup) => popup.id !== id));
  };

  return (
    <S.CardWrapper>
      <S.Card>
        <S.TopSection>
          <S.Title onClick={handleTitleClick}>{title}</S.Title>
          <S.CloseButton onClick={handleCloseButtonClick}>
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
    </S.CardWrapper>
  );
};

export default PopupCard;
