import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGetProfessorSubjectsErrorResponse, TSubject } from './types';

const useGetProfessorSubjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [response, setData] = useState<TSubject[]>();

  const getProfessorSubjects = async (id: number) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/teacher/${id}/subjects`);

      setData(response.data.data as TSubject[]);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TGetProfessorSubjectsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during subjects request. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    error,
    getProfessorSubjects,
  };
};

export default useGetProfessorSubjects;
