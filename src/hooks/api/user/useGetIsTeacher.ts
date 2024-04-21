import { useQuery } from '@tanstack/react-query';

import { get, userQueryKeys, userUrl } from '@/libs';

export const useGetIsTeacher = () =>
  useQuery({
    queryKey: userQueryKeys.getIsTeacher(),
    queryFn: () => get<boolean>(userUrl.isTeacher()),
  });
