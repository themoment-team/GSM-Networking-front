import { useGetIsTeacher } from '@/hooks';

export const useCheckIsTeacher = () => {
  const { data } = useGetIsTeacher();

  return !!data?.isTeacher;
};
