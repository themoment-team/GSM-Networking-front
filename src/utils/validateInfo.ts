import type { MenteeType, MentorType } from '@/types';

function validateInfo(info: MenteeType | MentorType | null | undefined) {
  return info?.name ? info : null;
}

export default validateInfo;
