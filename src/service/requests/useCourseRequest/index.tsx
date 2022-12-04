import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TCourseData, TCourseErrorResponse } from './types';

const useCourseRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TCourseData[]>([]);

  const coursesFetch = async () => {
    setIsLoading(true);
    setError(undefined);
    setData([]);

    try {
      const res = await api.get('/course');
      setData(res.data);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TCourseErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during course fetch. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => setError(undefined);

  return {
    data,
    isLoading,
    error,
    coursesFetch,
    resetError,
  };
};

export default useCourseRequest;
