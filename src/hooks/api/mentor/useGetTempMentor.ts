import { useQuery } from '@tanstack/react-query';

import { get, tempMentorQueryKeys, tempMentorUrl } from '@/libs';
import type { WorkerType } from '@/types';

export const useGetTempMentor = (userName: string) =>
  useQuery({
    queryKey: tempMentorQueryKeys.getTempMentor(userName),
    queryFn: () => get<WorkerType[]>(tempMentorUrl.getTempMentor(userName)),
  });
