import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TUpdateUserErrorResponse, TUpdateUserRequestBody } from './types';

const useUpdateUserRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const updateUser = async (user: TUpdateUserRequestBody) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.patch(`/user`, user);
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TUpdateUserErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during update user. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    setError(undefined);
    setIsSuccess(false);
  };

  return {
    isLoading,
    isSuccess,
    error,
    updateUser,
    resetStates,
  };
};

export default useUpdateUserRequest;
