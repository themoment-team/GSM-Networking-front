import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { gwangyaKeys, gwangyaUrl } from '@/libs';

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
      axios.post(
        gwangyaUrl.postGwangyaContent(),
        { content: parameter.content },
        {
          headers: {
            gwangyaToken: parameter.gwangyaToken,
          },
        }
      ),
    ...options,
  });
