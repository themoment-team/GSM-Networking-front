import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

// TODO : Add interceptor for refresh token
axiosInstance.interceptors.response.use((response) => {
  if (response.status >= 200 && response.status <= 300) {
    return response.data;
  }

  return Promise.reject(response.data);
});
