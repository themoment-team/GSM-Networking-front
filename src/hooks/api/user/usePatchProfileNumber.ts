import { useMutation } from '@tanstack/react-query';

import { patch, userQueryKeys, userUrl } from '@/libs';
import type { PatchProfileNumberType } from '@/types';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const usePatchProfileNumber = (
  options?: UseMutationOptions<void, AxiosError, PatchProfileNumberType>
) =>
  useMutation({
    mutationKey: userQueryKeys.patchProfileNumber(),
    mutationFn: (data: PatchProfileNumberType) =>
      patch<void>(userUrl.patchProfileNumber(), data),
    ...options,
  });
