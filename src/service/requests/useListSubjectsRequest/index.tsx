import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TListSubjectsErrorResponse,
  TListSubjectsHttpResponse,
  TListSubjectsParams,
  TListSubjectsResponse,
} from './types';

const useListSubjectsRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TListSubjectsResponse>();

  const listSubjects = async (params?: TListSubjectsParams) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get('/subject', { params });

      const httpResponse = response.data as TListSubjectsHttpResponse;

      const formatedSubjects = httpResponse.data.map((subject) => ({
        id: subject.id,
        name: subject.name,
        code: subject.code,
        course_id: subject.course_id,
        responsables: subject.SubjectResponsability,
        isStudentEnrolled: subject.isStudentEnrolled,
        monitors: subject.Monitor.map((monitor) => ({
          ...monitor.student.user,
          status: monitor.status.status,
          id: monitor.id,
          studentId: monitor.student.user.id,
          course: monitor.student.course,
          responsable: monitor.responsible_professor.user,
          enrollment: monitor.student.enrollment,
        })),
      }));

      setData({ meta: httpResponse.meta, data: formatedSubjects });
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
    isLoading,
    data,
    error,
    listSubjects,
  };
};

export default useListSubjectsRequest;
