import { axiosInstance } from '@/libs';

export const del = async <T>(
  ...args: Parameters<typeof axiosInstance.delete>
) => await axiosInstance.delete<T, T>(...args);

export const get = async <T>(...args: Parameters<typeof axiosInstance.get>) =>
  await axiosInstance.get<T, T>(...args);

export const patch = async <T>(
  ...args: Parameters<typeof axiosInstance.patch>
) => await axiosInstance.patch<T, T>(...args);

export const post = async <T>(...args: Parameters<typeof axiosInstance.post>) =>
  await axiosInstance.post<T, T>(...args);

export const put = async <T>(...args: Parameters<typeof axiosInstance.put>) =>
  await axiosInstance.put<T, T>(...args);
