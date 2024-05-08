import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TGetExternalMonitoringErrorResponse,
  TGetExternalMonitoringParams,
  TExternalMonitorsRequestResponse,
} from './types';

const useGetExternalMonitoringRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TExternalMonitorsRequestResponse>();

  const getExternalMonitoring = async (
    params?: TGetExternalMonitoringParams
  ) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get('/schedules/external_monitoring', {
        params,
      });

      const dt = response.data as TExternalMonitorsRequestResponse;

      setData(dt);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TGetExternalMonitoringErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during list requests. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getExternalMonitoring,
  };
};

export default useGetExternalMonitoringRequest;
