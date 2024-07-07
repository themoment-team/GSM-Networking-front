import { useGetIsTeacher } from '@/hooks';

export const useCheckIsTeacher = () => {
  const { data } = useGetIsTeacher();

  const isTeacher = !!data?.isTeacher;

  return isTeacher;
};
