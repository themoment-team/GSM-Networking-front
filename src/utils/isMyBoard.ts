'use server';

/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */

const WRITE_BOARD_PATH = '/community/write?boardid=' as const;

import {
  getBoardDetail,
  getIsTeacher,
  getMyInfo,
  getMyMenteeInfo,
} from '@/apis';
import { BOARD_PATH } from '@/constants';
import type { BoardResponseType, MenteeType, MentorType } from '@/types';

const isMyBoard = async (id: string): Promise<[boolean, BoardResponseType]> => {
  const board = await getBoardDetail(BOARD_PATH, id);
  let myInfo: MenteeType | MentorType | null;

  try {
    myInfo = await getMyMenteeInfo(`${WRITE_BOARD_PATH}${id}`);
  } catch {}

  try {
    const isTeacher = await getIsTeacher(`${WRITE_BOARD_PATH}${id}`);
    myInfo = await getMyInfo(`${WRITE_BOARD_PATH}${id}`, isTeacher!);
  } catch {}

  return [board!.author.id === myInfo!.id, board!];
};

export default isMyBoard;
