import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TAcceptMonitorErrorResponse } from './types';

const useAcceptMonitorRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const acceptMonitor = async (id_monitoring: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.patch(`/monitor/${id_monitoring}/accept`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TAcceptMonitorErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during accepting monitors. Error:', errorMessage);

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
    acceptMonitor,
    resetStates,
  };
};

export default useAcceptMonitorRequest;
