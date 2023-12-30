import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostMenteeAuthorityShift = (
  options?: UseMutationOptions<unknown, AxiosError, unknown>
) =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeAuthorityShift(),
    mutationFn: () => post(menteeUrl.postMenteeAuthorityShift()),
    ...options,
  });
