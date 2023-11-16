import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, post } from '@/libs';
import type { MentorType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMentorRegister = (
  options?: UseMutationOptions<unknown, AxiosError, MentorType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.postMentorRegister(),
    mutationFn: (mentorInfo: MentorType) =>
      post(mentorUrl.postMentorRegister(), mentorInfo),
    ...options,
  });
