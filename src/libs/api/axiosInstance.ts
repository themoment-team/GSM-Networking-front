import axios from 'axios';

import { authUrl, get, gwangyaUrl, patch } from '@/libs';
import type { GetGwangyaTokenType } from '@/types';

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

const cookieDomain =
  process.env.NODE_ENV === 'development' ? 'localhost' : '.gsm-networking.com';

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

axiosInstance.interceptors.request.use(
  async (config) => {
    const existGwangyaToken = document.cookie.includes('gwangyaToken');

    if (
      config.url === gwangyaUrl.getGwangyaToken() ||
      config.url === authUrl.patchRefresh()
    ) {
      return config;
    }

    if (!existGwangyaToken) {
      const { gwangyaToken, expiredTime } = await get<GetGwangyaTokenType>(
        gwangyaUrl.getGwangyaToken()
      );

      const cookieExpiredTime = new Date(expiredTime);

      document.cookie = `gwangyaToken=${gwangyaToken}; Domain=${cookieDomain}; expires=${cookieExpiredTime.toString()}; path=/;`;

      if (config.url?.includes('api/v1/gwangya')) {
        config.headers.gwangyatoken = gwangyaToken;
      }
    }

    return config;
  },
  async (error) => Promise.reject(error)
);

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
      } else {
        isRefreshing = true;

        /** Only works in production. */
        await patch(authUrl.patchRefresh());

        return axiosInstance(error.config);
      }
    }

    return Promise.reject(error);
  }
);
