import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';
import type { MenteeRequestType } from '@/types/mentee';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMenteeRegister = (
  options?: UseMutationOptions<unknown, AxiosError, MenteeRequestType, unknown>
) =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeRegister(),
    mutationFn: (menteeInfo: MenteeRequestType) =>
      post(menteeUrl.postMenteeRegister(), menteeInfo),
    ...options,
  });
