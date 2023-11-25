import { useMutation } from '@tanstack/react-query';

import { gwangyaKeys, gwangyaUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostGwangyaContent = (
  options?: UseMutationOptions<unknown, AxiosError, string>
) =>
  useMutation({
    mutationKey: gwangyaKeys.postGwangyaContent(),
    mutationFn: (content: string) =>
      post(gwangyaUrl.postGwangyaContent(), content, {
        headers: {
          gwangyaToken: '',
        },
      }),
    ...options,
  });
