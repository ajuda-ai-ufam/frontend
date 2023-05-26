import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TResetPasswordEmailErrorResponse } from './types';

const useResetPasswordEmailRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const resetPasswordEmail = async (emailToken: string) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post('/user/reset-password/token', { email: emailToken });

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TResetPasswordEmailErrorResponse;
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

  return { isLoading, isSuccess, error, resetPasswordEmail };
};

export default useResetPasswordEmailRequest;
