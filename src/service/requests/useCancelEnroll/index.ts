import api from '../../api';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { TCancelEnrollErrorResponse } from './types';

const useCancelEnroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const cancelEnroll = async (id: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.delete(`/subject/${id}/enroll`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TCancelEnrollErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during cancel enroll. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    cancelEnroll,
    isLoading,
    isSuccess,
    error,
  };
};

export default useCancelEnroll;
