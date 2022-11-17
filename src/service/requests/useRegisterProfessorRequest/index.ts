import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../../api';
import useSaveToken from '../../storage/saveToken';
import {
  TRegisterProfessorRequestHook,
  TRegisterProfessorRequest,
  TRegisterProfessorResponse,
  TRegisterProfessorErrorResponse,
} from './types';

const useRegisterProfessorRequest = (): TRegisterProfessorRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TRegisterProfessorRequest = { name, email, password };

    try {
      const res = await api.post('user/teacher', body);
      const data = res.data as TRegisterProfessorResponse;
      useSaveToken(data.access_token);
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TRegisterProfessorErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during register. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => setError(undefined);

  return {
    isLoading,
    isSuccess,
    error,
    resetError,
    register,
  };
};

export default useRegisterProfessorRequest;
