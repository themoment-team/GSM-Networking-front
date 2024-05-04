'use client';

import { useEffect } from 'react';

import { PopupCard } from '@/components';
import { useGetPopupList } from '@/hooks/api/popup';

const PopupList = () => {
  const { data } = useGetPopupList();
  // const filtered = response.filter(() => {});

  useEffect(() => {}, [data]);

  return (
    <>
      {popupList &&
        popupList.map((item) => <PopupCard key={item.id} {...item} />)}
    </>
  );
};

export default PopupList;
