import { useMutation } from '@tanstack/react-query';

import { gwangyaQueryKeys, gwangyaUrl, post } from '@/libs';
import { getCookie } from '@/utils';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostGwangyaContent = (
  options?: UseMutationOptions<unknown, AxiosError, string>
) => {
  const gwangyaToken = getCookie('gwangyaToken');

  return useMutation({
    mutationKey: gwangyaQueryKeys.postGwangyaContent(),
    mutationFn: (content: string) =>
      post(
        `api/v1${gwangyaUrl.postGwangyaContent()}`,
        { content: content },
        {
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          headers: {
            GwangyaToken: gwangyaToken,
          },
          withCredentials: false,
        }
      ),
    ...options,
  });
};
