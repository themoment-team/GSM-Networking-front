import { useMutation } from '@tanstack/react-query';

import { gwangyaKeys, gwangyaUrl, post } from '@/libs';
import { getGwangyaTokenCookie } from '@/utils';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostGwangyaContent = (
  options?: UseMutationOptions<unknown, AxiosError, string>
) => {
  const gwangyaToken = getGwangyaTokenCookie();

  return useMutation({
    mutationKey: gwangyaKeys.postGwangyaContent(),
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
