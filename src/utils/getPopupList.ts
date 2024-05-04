import { get } from '@/libs';
import type { PopupType } from '@/types';

const getPopupList = async () => {
  const response = await get<PopupType[]>('/popup');

  return response;
};

export default getPopupList;
