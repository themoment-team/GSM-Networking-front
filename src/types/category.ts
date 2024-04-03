import type { CATEGORYLIST } from '@/components/Modal/BoardFilter';
export type CategoryFilterType = (typeof CATEGORYLIST)[number];

export enum CategoryType {
  선생님 = 'TEACHER',
  공지 = 'NOTICE',
  QnA = 'QNA',
  잡담 = 'CHAT',
  자료공유 = 'SHARE',
  스터디 = 'STUDY',
  숙박 = 'HOSTEL',
  모임 = 'MEET',
  스포츠 = 'SPORT',
}

export enum ReverseCategoryType {
  TEACHER = '선생님',
  NOTICE = '공지',
  QnA = 'QNA',
  CHAT = '잡담',
  SHARE = '자료공유',
  STUDY = '스터디',
  HOSTEL = '숙박',
  MEET = '모임',
  SPORT = '스포츠',
}
