import { AxiosError } from 'axios';
import { useState } from 'react';
import { CodeTypeEnum } from '../../../utils/constants';
import api from '../../api';
import {
  TVerifyCodeErrorResponse,
  TVerifyCodeRequest,
  TVerifyCodeRequestHook,
} from './types';

const useVerifyCodeRequest = (): TVerifyCodeRequestHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const verifyCode = async (
    code: string,
    email: string,
    codeType: CodeTypeEnum
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TVerifyCodeRequest = { code, email, type_code: codeType };

    try {
      await api.post('/code/verify', body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TVerifyCodeErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error('Error during code verification. Error:', errorMessage);

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    verifyCode,
  };
};

export default useVerifyCodeRequest;
