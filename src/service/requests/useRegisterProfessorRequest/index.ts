import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../../api';
import {
  TRegisterProfessorRequestHook,
  TRegisterProfessorRequest,
  TRegisterProfessorErrorResponse,
} from './types';

const useRegisterProfessorRequest = (): TRegisterProfessorRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const register = async (
    name: string,
    email: string,
    siape: string,
    password: string,
    confirmPassword: string
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TRegisterProfessorRequest = {
      name,
      siape,
      email,
      password,
      confirm_password: confirmPassword,
    };

    try {
      await api.post('/user/teacher', body);

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

  return {
    isLoading,
    isSuccess,
    error,
    register,
  };
};

export default useRegisterProfessorRequest;
