import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TEndingMonitoringErrorResponse } from './types';

const useRemoveMonitorRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const removeMonitor = async (monitorId: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.patch(`/monitor/${monitorId}/end`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TEndingMonitoringErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during ending monitoring. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    removeMonitor,
  };
};

export default useRemoveMonitorRequest;
