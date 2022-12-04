import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TListSubjectsErrorResponse,
  TListSubjectsParams,
  TListSubjectsResponse,
} from './types';

const useListSubjectsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TListSubjectsResponse>();

  const listSubjects = async (params?: TListSubjectsParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get('/subject', { params });

      setData(response.data as TListSubjectsResponse);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TListSubjectsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during list subjects. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    listSubjects,
  };
};

export default useListSubjectsRequest;
