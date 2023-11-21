import { useMutation } from '@tanstack/react-query';

import { post, userQueryKeys, userUrl } from '@/libs';
import type { PostProfileImgType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostProfileImgUrl = (
  options?: UseMutationOptions<void, AxiosError, PostProfileImgType>
) =>
  useMutation({
    mutationKey: userQueryKeys.postProfileImgUrl(),
    mutationFn: (data: PostProfileImgType) =>
      post<void>(userUrl.postProfileImgUrl(), data),
    ...options,
  });
