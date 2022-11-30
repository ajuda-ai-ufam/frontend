import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TAssignProfessorsErrorResponse,
  TAssignProfessorsRequest,
} from './types';

const useAssignProfessorsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const assignProfessors = async (body: TAssignProfessorsRequest) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.post('/teacher/assign-subject', body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TAssignProfessorsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during assign professors. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    setError(undefined);
    setIsSuccess(false);
  };

  return {
    isLoading,
    isSuccess,
    error,
    assignProfessors,
    resetStates,
  };
};

export default useAssignProfessorsRequest;
