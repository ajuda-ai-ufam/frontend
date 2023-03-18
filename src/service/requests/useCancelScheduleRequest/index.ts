import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TCancelScheduleErrorResponse } from './types';

const useCancelScheduleRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const cancelSchedule = async (scheduleId: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/schedules/${scheduleId}/cancel`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TCancelScheduleErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during schedule cancel. Error:', errorMessage);

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
    cancelSchedule,
    resetStates,
  };
};

export default useCancelScheduleRequest;
