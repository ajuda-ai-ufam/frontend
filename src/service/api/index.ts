import axios, { InternalAxiosRequestConfig } from 'axios';
import useGetToken from '../storage/getToken';
import useClearStorage from '../storage/clearStorage';
import { SCREENS } from '../../utils/screens';
import { NOT_LOGGED_SCREENS } from '../../utils/screens';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig<unknown>) => {
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
    if (
      error.response.status === 401 &&
      !NOT_LOGGED_SCREENS.includes(window.location.pathname)
    ) {
      alert(
        'Sua sessão expirou. Para continuar usando o Super Monitoria, faça login novamente.'
      );
      useClearStorage();
      window.location.href = SCREENS.LOGIN;
    }
    return Promise.reject(error);
  }
);

export default api;
