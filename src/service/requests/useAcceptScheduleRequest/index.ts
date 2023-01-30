import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TAcceptScheduleErrorResponse } from './types';

const useAcceptScheduleRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const acceptSchedule = async (scheduleId: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/monitor/accept/scheduled-monitoring/${scheduleId}`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TAcceptScheduleErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during schedule accept. Error:', errorMessage);

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
    acceptSchedule,
    resetStates,
  };
};

export default useAcceptScheduleRequest;
