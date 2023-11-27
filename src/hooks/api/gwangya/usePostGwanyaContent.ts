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
        gwangyaUrl.postGwangyaContent(),
        { content: parameter.content },
        {
          headers: {
            withCredential: false,
            gwangyaToken: parameter.gwangyaToken,
          },
        }
      ),
    ...options,
  });
