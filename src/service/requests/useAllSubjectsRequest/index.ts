import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TListSubjectsErrorResponse } from '../useListSubjectsRequest/types';
import { ExternalMonitoringSubject } from './types';

const useAllSubjectsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<ExternalMonitoringSubject>();

  const getAllSubjects = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const res = await api.get('/subject/all');

      const httpResponse = res.data as ExternalMonitoringSubject;

      const formatedSubjects = httpResponse.map((subject) => ({
        id: subject.id,
        name: subject.name,
        code: subject.code,
        course_id: subject.course_id,
        SubjectResponsability: subject.SubjectResponsability,
      }));

      setData(formatedSubjects);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TListSubjectsErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during list subjects. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    getAllSubjects,
  };
};

export default useAllSubjectsRequest;
