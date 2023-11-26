import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { gwangyaKeys, gwangyaUrl } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePostGwangyaContent = (
  options?: UseMutationOptions<unknown, AxiosError, string>
) =>
  useMutation({
    mutationKey: gwangyaKeys.postGwangyaContent(),
    mutationFn: (content: string) =>
      axios.post(
        gwangyaUrl.postGwangyaContent(),
        { content },
        {
          headers: {
            gwangyaToken: 'lnWIybV1jCshfK243UOr',
          },
        }
      ),
    ...options,
  });
