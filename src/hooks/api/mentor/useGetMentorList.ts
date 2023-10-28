import { useQuery } from '@tanstack/react-query';

import { get, mentorQueryKeys, mentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

export const useGetMentorList = () =>
  useQuery({
    queryKey: mentorQueryKeys.getMentorList(),
    queryFn: () => get<WorkerType[]>(mentorUrl.getMentorList()),
  });
