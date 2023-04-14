import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TRefuseScheduleErrorResponse } from './types';

const useRefuseScheduleRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const refuseSchedule = async (scheduleId: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/monitor/refuse/scheduled-monitoring/${scheduleId}`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TRefuseScheduleErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during schedule refuse. Error:', errorMessage);

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
    refuseSchedule,
    resetStates,
  };
};

export default useRefuseScheduleRequest;
