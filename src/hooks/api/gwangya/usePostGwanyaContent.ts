import { useMutation } from '@tanstack/react-query';

import { gwangyaKeys, gwangyaUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface ParameterType {
  content: string;
  gwangyaToken: string;
}

export const usePostGwangyaContent = (
  options?: UseMutationOptions<unknown, AxiosError, ParameterType>
) =>
  useMutation({
    mutationKey: gwangyaKeys.postGwangyaContent(),
    mutationFn: (parameter: ParameterType) =>
      post(
        `api/v1${gwangyaUrl.postGwangyaContent()}`,
        { content: parameter.content },
        {
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          headers: {
            GwangyaToken: parameter.gwangyaToken,
          },
          withCredentials: false,
        }
      ),
    ...options,
  });
