import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';
import type { MenteeType } from '@/types/mentee';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMenteeRegister = (
  options?: UseMutationOptions<unknown, AxiosError, MenteeType, unknown>
) =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeRegister(),
    mutationFn: (menteeInfo: MenteeType) =>
      post(menteeUrl.postMenteeRegister(), menteeInfo),
    ...options,
  });
