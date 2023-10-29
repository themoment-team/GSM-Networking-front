import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';

export const usePostMenteeRole = (options?: UseMutationOptions) =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeRole(),
    mutationFn: () => post(menteeUrl.postMenteeRole()),
    ...options,
  });
