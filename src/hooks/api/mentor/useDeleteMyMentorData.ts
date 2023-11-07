import { useMutation } from '@tanstack/react-query';

import { del, mentorQueryKeys, mentorUrl } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';

export const useDeleteMyMentorData = (options?: UseMutationOptions) =>
  useMutation({
    mutationKey: mentorQueryKeys.deleteMyMentorData(),
    mutationFn: () => del(mentorUrl.deleteMyMentorData()),
    ...options,
  });
