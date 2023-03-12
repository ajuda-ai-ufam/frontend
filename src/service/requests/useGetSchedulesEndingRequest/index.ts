import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGetSchedulesErrorResponse, TSchedulesEndingResponse } from './types';

const useGetSchedulesEndingRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TSchedulesEndingResponse>();

  const getSchedulesEnding = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/schedules/ending`);
      const data = response.data as TSchedulesEndingResponse;
      setData(data);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetSchedulesErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during get ending schedules. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getSchedulesEnding,
  };
};

export default useGetSchedulesEndingRequest;
