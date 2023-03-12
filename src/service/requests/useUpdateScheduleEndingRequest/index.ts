import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../../api';
import { TUpdateScheduleEndingErrorResponse } from './types';

const useUpdateScheduleEndingRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const updateScheduleEnding = async (id: number, realized: boolean) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/schedules/${id}/end`, { realized: realized });
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TUpdateScheduleEndingErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during update schedule. Error:', errorMessage);

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
    updateScheduleEnding,
    resetStates,
  };
};

export default useUpdateScheduleEndingRequest;
