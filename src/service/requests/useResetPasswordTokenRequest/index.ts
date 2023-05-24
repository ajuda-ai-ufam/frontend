import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TResetPasswordTokenErrorResponse } from './types';

const useResetPasswordTokenRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const resetPasswordToken = async (emailToken: string) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post('/user/reset-password/token', { email: emailToken });

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TResetPasswordTokenErrorResponse;
      const errorMessage = errorData?.message || 'Error desconhecido';

      console.log(
        'Error during request a reset password token. Error:',
        errorMessage
      );

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, error, resetPasswordToken };
};

export default useResetPasswordTokenRequest;
