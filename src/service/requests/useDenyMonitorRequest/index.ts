import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../../api';
import { TDenyMonitorErrorResponse } from './types';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useDenyMonitorRequest = () => {
  const { showInfoSnackBar } = useSnackBar();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const denyMonitor = async (id_monitoring: number) => {
    // setIsLoading(true);
    // setIsSuccess(false);
    // setError(undefined);

    // try {
    //   await api.patch(`/monitor/${id_monitoring}/accept`);

    //   setIsSuccess(true);
    // } catch (error) {
    //   const err = error as AxiosError;
    //   const errorData = err.response?.data as TDenyMonitorErrorResponse;
    //   const errorMessage = errorData?.message || 'Erro desconhecido';

    //   console.error('Error during deny monitors. Error:', errorMessage);

    //   setError(errorMessage);
    // } finally {
    //   setIsLoading(false);
    // }
    showInfoSnackBar('Feature ainda não disponível');
  };

  const resetStates = () => {
    setError(undefined);
    setIsSuccess(false);
  };

  return {
    isLoading,
    isSuccess,
    error,
    denyMonitor,
    resetStates,
  };
};

export default useDenyMonitorRequest;
