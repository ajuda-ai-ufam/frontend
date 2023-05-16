import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TEndSubjectResponsabilityErrorResponse } from './types';

const useEndSubjectResponsability = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const endResponsability = async (id: number) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.patch(`/subject/responsability/${id}/end`);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TEndSubjectResponsabilityErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during end responsability. Error:', errorMessage);

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
    endResponsability,
    resetStates,
  };
};

export default useEndSubjectResponsability;
