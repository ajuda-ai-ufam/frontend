import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TGenerateCodeErrorResponse } from '../useGenerateCodeRequest/types';
import {
  TGetScheduleRequestParams,
  TGetSchedulesRequestResponse,
} from './types';

const useGetSchedulesRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [response, setData] = useState<TGetSchedulesRequestResponse>();

  const getSchedules = async ({
    page,
    eventType,
    status,
  }: TGetScheduleRequestParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    const statusQueryParam = !!status
      ? `&status=${status.reduce(
          (list, stat) => (!!list ? `${list},${stat}` : `${stat}`),
          ''
        )}`
      : '';
    const eventTypeQueryParam = eventType ? `&eventType=${eventType}` : '';

    try {
      const response = await api.get(
        `/student/schedules?quantity=10&page=${
          page || 1
        }${statusQueryParam}${eventTypeQueryParam}`
      );

      setData(response.data as TGetSchedulesRequestResponse);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGenerateCodeErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during schedules request. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    error,
    getSchedules,
  };
};

export default useGetSchedulesRequest;
