import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import {
  TStudentRegisterErrorResponse,
  TStudentRegisterRequest,
  TStudentRegisterRequestHook,
} from './types';

const useStudentRegisterRequest = (): TStudentRegisterRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const registerStudent = async (
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
    description: string,
    enrollment: string,
    courseId: number,
    contactEmail: string,
    whatsapp: string,
    linkedin: string
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    const body: TStudentRegisterRequest = {
      email,
      name,
      password,
      confirm_password: confirmPassword,
      description,
      enrollment,
      course_id: courseId,
      contact_email: contactEmail,
      whatsapp,
      linkedin,
    };

    try {
      await api.post('/user/student', body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TStudentRegisterErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during student register. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    registerStudent,
  };
};

export default useStudentRegisterRequest;
