import { useQuery } from '@tanstack/react-query';

import { get, mentorQueryKeys, mentorUrl } from '@/libs';
import type { MentorType } from '@/types';

export const useGetMentorList = () =>
  useQuery({
    queryKey: mentorQueryKeys.getMentorList(),
    queryFn: () => get<MentorType[]>(mentorUrl.getMentorList()),
  });
