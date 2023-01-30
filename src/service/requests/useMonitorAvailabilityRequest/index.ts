import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../../api';
import {
  TMonitorAvailabilityRequest,
  TMonitorAvailabilityErrorResponse,
} from './types';

const useMonitorAvailabilityRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const monitorAvailability = async (body: TMonitorAvailabilityRequest) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post('/monitor/availability', body);
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TMonitorAvailabilityErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during register. Error:', errorMessage);

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
    monitorAvailability,
    resetStates,
  };
};

export default useMonitorAvailabilityRequest;
