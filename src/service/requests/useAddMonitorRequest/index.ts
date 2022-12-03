import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TAddMonitorErrorResponse, TAddMonitorRequest } from './types';

const useAddMonitorRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const addMonitor = async (studentId: number, body: TAddMonitorRequest) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post(`/monitor/request/${studentId}`, body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TAddMonitorErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during assign professors. Error:', errorMessage);

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
    addMonitor,
    resetStates,
  };
};

export default useAddMonitorRequest;
