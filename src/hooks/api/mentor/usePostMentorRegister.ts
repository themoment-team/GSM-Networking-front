import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, post } from '@/libs';
import type { MentorRequestType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMentorRegister = (
  options?: UseMutationOptions<unknown, AxiosError, MentorRequestType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.postMentorRegister(),
    mutationFn: (mentorInfo: MentorRequestType) =>
      post(mentorUrl.postMentorRegister(), mentorInfo),
    ...options,
  });
