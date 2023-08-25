import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGetMonitorErrorResponse, TMonitor } from './types';

const useGetMonitorRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TMonitor>();

  const getMonitor = async (monitorId: number) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/monitor/${monitorId}`);

      setData(response.data as TMonitor);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetMonitorErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';
      console.log(
        'Error during getting monitors informations. Error:',
        errorMessage
      );
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    getMonitor,
  };
};

export default useGetMonitorRequest;
