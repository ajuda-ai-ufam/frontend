import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TResetPasswordErrorResponse } from './types';

const useResetPasswordRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const resetPassword = async (newPassword: string, token: string) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post('/user/reset-password', {
        newPassword: newPassword,
        token: token,
      });
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TResetPasswordErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.log('Error during reset password. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, error, resetPassword };
};

export default useResetPasswordRequest;
