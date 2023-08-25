import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../../api';
import useSaveToken from '../../storage/saveToken';
import {
  TLoginErrorResponse,
  TLoginRequest,
  TLoginRequestHook,
  TLoginResponse,
} from './types';

const useLoginRequest = (): TLoginRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<TLoginErrorResponse>();
  const [isSuccess, setIsSuccess] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TLoginRequest = { email, password };

    try {
      const res = await api.post('/auth/login', body);

      const data = res.data as TLoginResponse;

      useSaveToken(data.access_token);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TLoginErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during login. Error:', errorMessage);

      setError(errorData);
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => setError(undefined);

  return {
    isLoading,
    isSuccess,
    error,
    login,
    resetError,
  };
};

export default useLoginRequest;
