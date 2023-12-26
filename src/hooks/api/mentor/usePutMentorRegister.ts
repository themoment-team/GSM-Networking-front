import { useMutation } from '@tanstack/react-query';

import { mentorQueryKeys, mentorUrl, put } from '@/libs';
import type { MentorType, RequestCareerType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface CareerType extends RequestCareerType {
  id: string;
}

interface RequestType extends MentorType {
  id?: string;
  career: CareerType[];
}

export const usePutMentorRegister = (
  options?: UseMutationOptions<unknown, AxiosError, RequestType, unknown>
) =>
  useMutation({
    mutationKey: mentorQueryKeys.putMentorRegister(),
    mutationFn: (mentorInfo: RequestType) =>
      put(mentorUrl.putMentorRegister(), mentorInfo),
    ...options,
  });
