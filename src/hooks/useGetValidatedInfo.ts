import { useEffect, useState } from 'react';

import type { MentorInfoType } from '@/types';
import type { MenteeType } from '@/types';
import { validateInfo } from '@/utils';

import { useGetMyMentorInfo, useGetMyMenteeInfo } from '.';

export const useGetValidatedInfo = (
  initialMentorInfo?: MentorInfoType | null,
  initialMenteeInfo?: MenteeType | null
) => {
  const { data: mentorInfo } = useGetMyMentorInfo({
    initialData: initialMentorInfo,
  });
  const { data: menteeInfo } = useGetMyMenteeInfo({
    initialData: initialMenteeInfo,
  });

  const [userInfo, setUserInfo] = useState<MenteeType | MentorInfoType | null>(
    null
  );

  useEffect(() => {
    const validatedMentorInfo = validateInfo(mentorInfo);
    const validatedMenteeInfo = validateInfo(menteeInfo);
    setUserInfo(validatedMentorInfo || validatedMenteeInfo);
  }, [menteeInfo, mentorInfo]);

  return { userInfo };
};
