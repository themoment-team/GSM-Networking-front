import axios from 'axios';

import { authUrl, patch } from '@/libs';

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

let isRefreshing = false;

/**
 * prevent duplicated refresh request
 */
const waitRefreshEnd = () =>
  new Promise<void>((resolve) => {
    if (isRefreshing === false) {
      resolve();
    } else {
      setTimeout(() => waitRefreshEnd(), 100);
    }
  });

axiosInstance.interceptors.response.use(
  (response) => {
    /** success refresh */
    if (response.config.url === authUrl.patchRefresh()) {
      isRefreshing = false;
    }

    /** success request */
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    /** fail refresh */
    if (error.config.url === authUrl.patchRefresh()) {
      isRefreshing = false;

      process.env.NODE_ENV === 'production' && location.replace('/auth/signin');

      return Promise.reject(error);
    }

    /** not exist accessToken */
    if (error.response.status === 401) {
      if (isRefreshing) {
        await waitRefreshEnd();

        return axiosInstance(error.config);
      }

      try {
        isRefreshing = true;

        await patch(authUrl.patchRefresh());

        return axiosInstance(error.config);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
