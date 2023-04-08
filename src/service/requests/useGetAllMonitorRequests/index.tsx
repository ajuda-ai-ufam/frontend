import { AxiosError } from 'axios';
import { useState } from 'react';
import { TypeMonitoringStatus } from '../../../utils/constants';
import api from '../../api';
import {
  TListMonitorsRequestsErrorResponse,
  TListMonitorsRequestParams,
  TListMonitorsRequestResponse,
} from './types';

const useGetAllMonitorRequests = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TListMonitorsRequestResponse>();

  const listRequests = async (params?: TListMonitorsRequestParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get('/monitor/all', { params });

      const dt = response.data as TListMonitorsRequestResponse;

      setData(dt);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TListMonitorsRequestsErrorResponse;
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
    listRequests,
  };
};

export default useGetAllMonitorRequests;
