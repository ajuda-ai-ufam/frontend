import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TGetStudentErrorResponse,
  TGetAllStudent,
  TListStudents,
} from './types';

const useGetStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TListStudents>();

  const getStudents = async () => {
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    try {
      const response = await api.get(`/student`);

      const data = response.data as TGetAllStudent;

      const students: TListStudents = {
        students: data.map((student) => ({
          id: student.user.id,
          name: student.user.name,
          email: student.user.email,
        })),
      };

      setData(students);
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      const errorData = err.response?.data as TGetStudentErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during get students. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    getStudents,
  };
};

export default useGetStudent;
