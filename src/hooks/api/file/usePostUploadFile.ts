import { useMutation } from '@tanstack/react-query';

import { fileQueryKeys, fileUrl, post } from '@/libs';

import type { UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

interface ReturnDataType {
  fileUrl: string;
}

export const usePostUploadFile = (
  options?: UseMutationOptions<ReturnDataType, AxiosError, FormData>
) =>
  useMutation({
    mutationKey: fileQueryKeys.postUploadFile(),
    mutationFn: (data: FormData) =>
      post<ReturnDataType>(fileUrl.postUploadFile(), data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    ...options,
  });
