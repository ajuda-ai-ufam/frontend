import axios, { AxiosRequestConfig } from 'axios';
import useGetToken from '../storage/getToken';
import useClearStorage from '../storage/clearStorage';
import { SCREENS } from '../../utils/screens';

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    useClearStorage();
    window.location.href = SCREENS.LOGIN;
    return Promise.reject(error);
  }
);

export default api;
