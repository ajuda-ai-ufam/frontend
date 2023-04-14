import { AxiosError } from 'axios';
import moment from 'moment';
import { useState } from 'react';
import api from '../../api';
import {
  TGetSchedulesHistoricErrorResponse,
  TGetSchedulesHistoricRequestParams,
  TGetSchedulesHistoricRequestResponse,
} from './types';

const useGetSchedulesHistoricRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [response, setData] = useState<TGetSchedulesHistoricRequestResponse>();

  const getSchedules = async ({
    page,
    startDate,
    endDate,
    responsibleIds,
    status,
    studentEnrollment,
    studentName,
    subjectIds,
  }: TGetSchedulesHistoricRequestParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    const subjectIdsString = subjectIds
      ?.map((id) => `&subjectIds=${id}`)
      .join('');

    const responsibleIdsString = responsibleIds
      ?.map((id) => `&responsibleIds=${id}`)
      .join('');

    try {
      const response = await api.get(
        `/schedules?pageSize=10&page=${page || 1}
        ${status ? `&status=${status}` : ''}${
          startDate
            ? `&startDate=` + moment(startDate).format('YYYY-MM-DD')
            : ``
        }${endDate ? `&endDate=` + moment(endDate).format('YYYY-MM-DD') : ``}${
          subjectIds ? subjectIdsString : ``
        }${responsibleIds ? responsibleIdsString : ``}${
          studentEnrollment ? `&studentEnrollment=` + studentEnrollment : ``
        }${studentName ? `&studentName=` + studentName : ``}`
      );

      setData(response.data as TGetSchedulesHistoricRequestResponse);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response
        ?.data as TGetSchedulesHistoricErrorResponse;
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

export default useGetSchedulesHistoricRequest;
