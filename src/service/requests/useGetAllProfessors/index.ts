import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TProfessor, TGetProfessorsErrorResponse } from './types';

const useGetAllProfessors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [response, setData] = useState<TProfessor[]>();

  const getProfessors = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/teacher?quantity=100`);

      setData(response.data.data as TProfessor[]);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetProfessorsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during professors request. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    error,
    getProfessors,
  };
};

export default useGetAllProfessors;
