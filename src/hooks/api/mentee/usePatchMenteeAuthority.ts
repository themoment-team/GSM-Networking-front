import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, patch } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';

export const usePatchMenteeAuthority = (options?: UseMutationOptions) =>
  useMutation({
    mutationKey: menteeQueryKeys.patchMenteeAuthority(),
    mutationFn: () => patch(menteeUrl.patchMenteeAuthority()),
    ...options,
  });
