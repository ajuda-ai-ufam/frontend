import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TMonitorAvailableTime,
  TGetMonitorAvailableTimesErrorResponse,
  TGetMonitorAvailableTimesRequestResponse,
} from './types';

const useGetMonitorAvailableTimesRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TMonitorAvailableTime[]>();

  const getMonitorAvailableTimes = async (monitorId: number) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = (await api.get(
        `/monitor/availability/${monitorId}`
      )) as TGetMonitorAvailableTimesRequestResponse;

      setData(response.data);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TGetMonitorAvailableTimesErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error(
        'Error during monitor availability request. Error:',
        errorMessage
      );

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    setData(undefined);
    setError(undefined);
  };

  return {
    isLoading,
    data,
    error,
    getMonitorAvailableTimes,
    resetStates,
  };
};

export default useGetMonitorAvailableTimesRequest;
