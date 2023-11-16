import { useMutation } from '@tanstack/react-query';

import { del, tempMentorQueryKeys, tempMentorUrl } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useDeleteTempMentor = (
  options?: UseMutationOptions<unknown, AxiosError, number, unknown>
) =>
  useMutation({
    mutationKey: tempMentorQueryKeys.deleteTempMentor(),
    mutationFn: (id: number) => del(tempMentorUrl.deleteTempMentor(id)),
    ...options,
  });
