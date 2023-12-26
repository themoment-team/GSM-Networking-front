import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, put } from '@/libs';
import type { MentorType, RequestCareerType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface CareerType extends RequestCareerType {
  id?: number;
}

interface RequestType extends MentorType {
  id?: number;
  career: CareerType[];
}

export const usePutMentorUpdate = (
  options?: UseMutationOptions<unknown, AxiosError, RequestType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.putMentorUpdate(),
    mutationFn: (mentorInfo: RequestType) =>
      put(mentorUrl.putMentorUpdate(), mentorInfo),
    ...options,
  });
