import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TExternalMonitoringError, TExternalMonitoringParams } from './types';

const useExternalMonitoringRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<TExternalMonitoringError>();
  const [isSuccess, setIsSuccess] = useState(false);

  const externalMonitoringRegister = async (
    params: TExternalMonitoringParams
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    const body: TExternalMonitoringParams = {
      description: params.description,
      end: params.end,
      monitor_id: params.monitor_id,
      professor_id: params.professor_id,
      schedule_topic_id: params.schedule_topic_id,
      start: params.start,
      student_id: params.student_id,
      student_name: params.student_name,
    };

    try {
      await api.post('/monitor/external-monitoring', body);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TExternalMonitoringError;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error(
        'Error during register external monitoring. Error:',
        errorMessage
      );

      setError(errorData);
    } finally {
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    setError(undefined);
    setIsSuccess(false);
  };

  return {
    isLoading,
    isSuccess,
    error,
    externalMonitoringRegister,
    resetStates,
  };
};

export default useExternalMonitoringRequest;
