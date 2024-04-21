import { useQuery } from '@tanstack/react-query';

import { get, userQueryKeys, userUrl } from '@/libs';

interface TeacherData {
  isTeacher: boolean;
}

export const useGetIsTeacher = () =>
  useQuery<TeacherData>({
    queryKey: userQueryKeys.getIsTeacher(),
    queryFn: () => get<TeacherData>(userUrl.isTeacher()),
  });
