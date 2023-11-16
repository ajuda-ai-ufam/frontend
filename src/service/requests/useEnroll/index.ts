import api from '../../api';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { TEnrollErrorResponse } from './types';

const useEnroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const enroll = async (id: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    try {
      await api.post(`/subject/${id}/enroll`);
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TEnrollErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during enroll. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    enroll,
    isLoading,
    isSuccess,
    error,
  };
};

export default useEnroll;
