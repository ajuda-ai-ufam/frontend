import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TGetTopicRequestParams,
  TGetTopicsRequestErrorResponse,
  TGetTopicsRequestResponse,
} from './types';

const useGetTopicsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [response, setData] = useState<TGetTopicsRequestResponse>();

  const getTopics = async ({
    name,
    page,
    pageSize,
  }: TGetTopicRequestParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    const nameParam = name ? `&name=${name}` : ``;

    try {
      const response = await api.get(
        `/schedules/topics?pageSize=${pageSize || 10}&page=${
          page || 1
        }${nameParam}`
      );

      setData(response.data as TGetTopicsRequestResponse);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetTopicsRequestErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during topics request. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    error,
    getTopics,
  };
};

export default useGetTopicsRequest;
