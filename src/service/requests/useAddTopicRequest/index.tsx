import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGenerateCodeErrorResponse } from '../useGenerateCodeRequest/types';
import { TAddTopicRequestParams, TTopic } from './types';

const useAddTopicRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TTopic>();

  const addTopic = async ({ name }: TAddTopicRequestParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.post(`schedules/topics`, { name });

      setData(response.data as TTopic);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGenerateCodeErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during topics creation. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    setIsLoading(false);
    setData(undefined);
    setError(undefined);
  };

  return {
    isLoading,
    data,
    error,
    addTopic,
    resetStates,
  };
};

export default useAddTopicRequest;
