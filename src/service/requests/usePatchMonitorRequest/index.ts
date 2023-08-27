import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TPatchMonitorErrorResponse, TMonitorSettings } from './types';

const usePatchMonitorRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const patchMonitor = async (
    monitorId: number,
    monitorSettings: TMonitorSettings
  ) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);

    try {
      await api.patch(`/monitor/${monitorId}`, monitorSettings);

      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError;
      const errorData = err.response?.data as TPatchMonitorErrorResponse;
      const errorMessage = errorData?.message || 'Erro desconhecido';

      console.error(
        'Error during setting monitor informations. Error:',
        errorMessage
      );

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    patchMonitor,
  };
};

export default usePatchMonitorRequest;
