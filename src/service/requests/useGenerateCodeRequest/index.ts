import { AxiosError } from 'axios';
import { useState } from 'react';
import { CodeTypeEnum } from '../../../utils/constants';
import api from '../../api';
import {
  TGenerateCodeErrorResponse,
  TGenerateCodeRequest,
  TGenerateCodeRequestHook,
} from './types';

const useGenerateCodeRequest = (): TGenerateCodeRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<TGenerateCodeErrorResponse>();
  const [isSuccess, setIsSuccess] = useState(false);

  const generateCode = async (email: string, codeType: CodeTypeEnum) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TGenerateCodeRequest = { email, type_code: codeType };

    try {
      await api.post('/code/generate', body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TGenerateCodeErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during code generate. Error:', errorMessage);

      setError(errorData);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    generateCode,
  };
};

export default useGenerateCodeRequest;
