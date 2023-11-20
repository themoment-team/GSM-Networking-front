import { useMutation } from '@tanstack/react-query';

import { post, userQueryKeys, userUrl } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostProfileImgUrl = (
  options?: UseMutationOptions<void, AxiosError, string>
) =>
  useMutation({
    mutationKey: userQueryKeys.postProfileImgUrl(),
    mutationFn: (url: string) => post<void>(userUrl.postProfileImgUrl(url)),
    ...options,
  });
