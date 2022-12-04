import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TListProfessorsErrorResponse,
  TListProfessorsParams,
  TListProfessorsResponse,
} from './types';

const useListProfessorsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TListProfessorsResponse>();

  const listProfessors = async (params?: TListProfessorsParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get('/teacher', { params });

      setData(response.data as TListProfessorsResponse);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TListProfessorsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during list professors. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    listProfessors,
  };
};

export default useListProfessorsRequest;
