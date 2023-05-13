import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TScheduleErrorResponse } from './types';

const useScheduleRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const schedule = async (
    monitorId: number,
    start: string,
    end: string,
    description: string
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/student/${monitorId}/schedule`, {
        start,
        end,
        description,
      });

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TScheduleErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during schedule. Error:', errorMessage);

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
    schedule,
    resetStates,
  };
};

export default useScheduleRequest;
