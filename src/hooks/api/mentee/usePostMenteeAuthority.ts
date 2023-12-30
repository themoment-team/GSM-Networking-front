import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';

export const usePostMenteeAuthority = (options?: UseMutationOptions) =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeAuthority(),
    mutationFn: () => post(menteeUrl.postMenteeAuthority()),
    ...options,
  });
