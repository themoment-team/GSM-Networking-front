'use client';

import { useEffect, useState } from 'react';

import { PopupCard } from '@/components';
import type { PopupType } from '@/types';
import { getPopupList } from '@/utils';

const PopupList = () => {
  const [popupList, setPopupList] = useState<PopupType[]>();

  const getPopup = async () => {
    const response = await getPopupList();
    // console.log(response);
    // const filtered = response.filter(() => {});
    setPopupList(response);
  };

  useEffect(() => {
    getPopup();
  }, []);

  return (
    <>
      {popupList &&
        popupList.map((item) => <PopupCard key={item.id} {...item} />)}
    </>
  );
};

export default PopupList;
