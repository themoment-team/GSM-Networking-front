import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, put } from '@/libs';
import type { MentorRequestType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePutMentorUpdate = (
  options?: UseMutationOptions<unknown, AxiosError, MentorRequestType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.putMentorUpdate(),
    mutationFn: (mentorInfo: MentorRequestType) =>
      put(mentorUrl.putMentorUpdate(), mentorInfo),
    ...options,
  });
