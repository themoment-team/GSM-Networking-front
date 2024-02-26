import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, put } from '@/libs';
import type { MentorType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePutMentorUpdate = (
  options?: UseMutationOptions<unknown, AxiosError, MentorType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.putMentorUpdate(),
    mutationFn: (mentorInfo: MentorType) =>
      put(mentorUrl.putMentorUpdate(), mentorInfo),
    ...options,
  });
