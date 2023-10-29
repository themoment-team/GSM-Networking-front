import { useMutation } from '@tanstack/react-query';

import { menteeQueryKeys, menteeUrl, post } from '@/libs';

export const usePostMenteeRole = () =>
  useMutation({
    mutationKey: menteeQueryKeys.postMenteeRole(),
    mutationFn: () => post(menteeUrl.postMenteeRole()),
  });
