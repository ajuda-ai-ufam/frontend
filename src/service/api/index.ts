import axios, { AxiosRequestConfig } from 'axios';
import useGetToken from '../storage/getToken';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = useGetToken();

  if (config.headers) {
    config.headers['Content-Type'] = 'application/json';
    config.withCredentials = true;

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
