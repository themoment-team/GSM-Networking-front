'use client';

import { useEffect, useState } from 'react';

import { PopupCardWrapper } from './style';

import { PopupCard } from '@/components';
import { INVISIBLEPOPUPLIST } from '@/constants';
import { useGetPopupList } from '@/hooks/api/popup';
import type { PopupType } from '@/types';
import { isNumberArray } from '@/utils';

const PopupList = () => {
  const { data } = useGetPopupList();
  const [popupList, setPopupList] = useState<PopupType[]>([]);
  const parsedPrevInvisiblePopuplist = (() => {
    try {
      return JSON.parse(localStorage.getItem(INVISIBLEPOPUPLIST)!);
    } catch {
      return null;
    }
  })();
  const invisiblePopupList =
    parsedPrevInvisiblePopuplist && isNumberArray(parsedPrevInvisiblePopuplist)
      ? (parsedPrevInvisiblePopuplist as number[])
      : [];

  const deleteExpiredPopup = () => {
    const currentPopupList = data!.map(({ id }) => id);
    const filteredList = JSON.stringify(
      invisiblePopupList.filter((id) => currentPopupList.includes(id))
    );
    localStorage.setItem(INVISIBLEPOPUPLIST, filteredList);
  };

  useEffect(() => {
    if (data) {
      deleteExpiredPopup();
      const filteredList = data.filter(
        ({ id }) => !invisiblePopupList.includes(id)
      );
      setPopupList(filteredList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <PopupCardWrapper>
      {popupList &&
        popupList.map((item) => (
          <PopupCard key={item.id} {...item} setPopupList={setPopupList} />
        ))}
    </PopupCardWrapper>
  );
};

export default PopupList;
