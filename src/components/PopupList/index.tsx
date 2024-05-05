'use client';

import { useEffect, useState } from 'react';

import { PopupCardWrapper } from './style';

import { PopupCard } from '@/components';
import { INVISIBLEPOPUPLIST } from '@/constants';
import { useGetPopupList } from '@/hooks/api/popup';
import type { PopupType } from '@/types';

const PopupList = () => {
  const { data } = useGetPopupList();
  const [popupList, setPopupList] = useState<PopupType[]>([]);
  const prevInvisiblePopuplist = localStorage.getItem(INVISIBLEPOPUPLIST);
  const invisiblePopupList = prevInvisiblePopuplist
    ? (JSON.parse(prevInvisiblePopuplist) as number[])
    : [];

  useEffect(() => {
    if (data) {
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
