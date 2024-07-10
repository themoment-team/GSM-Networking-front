import axios from 'axios';

import { get, menteeUrl, mentorUrl } from '@/libs';
import type { MenteeInfoType, MentorInfoType } from '@/types';

const getMyId = async () => {
  let mentorInfo: MentorInfoType | null;
  let menteeInfo: MenteeInfoType | null;

  try {
    mentorInfo = await get(mentorUrl.getMyMentorInfo());
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response!.status === 403) mentorInfo = null;
    }
  }

  try {
    menteeInfo = await get(menteeUrl.getMyMenteeInfo());
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response!.status === 403) menteeInfo = null;
    }
  }

  return mentorInfo! ? mentorInfo.id : menteeInfo!.id;
};

export default getMyId;
