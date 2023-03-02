import { AxiosError } from 'axios';
import { useState } from 'react';
import { TypeMonitoringStatus } from '../../../utils/constants';
import api from '../../api';
import {
  TCompleteSubject,
  TGetSubjectErrorResponse,
  TGetSubjectResponse,
} from './types';

const useGetSubject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TCompleteSubject>();

  const getSubject = async (id: number) => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/subject/${id}`);

      const data = response.data as TGetSubjectResponse;

      const subject: TCompleteSubject = {
        id: data.id,
        name: data.name,
        code: data.code,
        course_id: data.course_id,
        responsables: data.SubjectResponsability.map(
          (resp) => resp.professor.user
        ),
        monitors: data.Monitor.map((monitor) => ({
          ...monitor.student.user,
          id: monitor.id,
          studentId: monitor.student.user.id,
          status: monitor.status.status as TypeMonitoringStatus,
          course: monitor.student.course,
          responsable: monitor.responsible_professor.user,
        })),
      };

      setData(subject);
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetSubjectErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during get subject. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getSubject,
  };
};

export default useGetSubject;
