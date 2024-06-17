'use server';

/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */

const PATH = '/community/write?boardid=' as const;

import {
  getBoardDetail,
  getIsTeacher,
  getMyInfo,
  getMyMenteeInfo,
} from '@/apis';
import { BOARD_PATH } from '@/constants';
import type { BoardType, MenteeType, MentorType } from '@/types';

const isMyBoard = async (id: string): Promise<[boolean, BoardType]> => {
  const board = await getBoardDetail(BOARD_PATH, id);
  let myInfo: MenteeType | MentorType | null;

  try {
    myInfo = await getMyMenteeInfo(`${PATH}${id}`);
  } catch {}

  try {
    const isTeacher = await getIsTeacher(`${PATH}${id}`);
    myInfo = await getMyInfo(`${PATH}${id}`, isTeacher!);
  } catch {}

  return [board!.author.id === myInfo!.id, board!];
};

export default isMyBoard;
