import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGetUserInfoRequestErrorResponse, TUser } from './types';

const useGetUserInfoRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TUser>();

  const getInfo = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/user/me`);

      setData(response.data as TUser);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetUserInfoRequestErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during user info request. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getInfo,
  };
};

export default useGetUserInfoRequest;
