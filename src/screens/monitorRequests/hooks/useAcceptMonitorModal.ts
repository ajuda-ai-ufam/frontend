import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAcceptMonitorRequest from '../../../service/requests/useAcceptMonitorRequest';
import { TMonitorRequest } from '../../../service/requests/useGetAllMonitorRequests/types';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useAcceptMonitorModal = () => {
  const navigate = useNavigate();
  const { showErrorSnackBar } = useSnackBar();

  const { isSuccess, isLoading, acceptMonitor, error, resetStates } =
    useAcceptMonitorRequest();

  const [isOpen, setIsOpen] = useState(false);

  const [currentMonitor, setCurrentMonitor] = useState<TMonitorRequest>();

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStates();

    if (isSuccess) navigate(0);
  };

  const handleOpenAcceptModal = (monitor: TMonitorRequest) => {
    setCurrentMonitor(monitor);
    setIsOpen(true);
  };

  const handleAcceptMonitorClick = () => {
    acceptMonitor(currentMonitor ? currentMonitor.id : 0);
  };

  useEffect(() => {
    if (error) {
      handleCloseModal();
      resetStates();
      showErrorSnackBar(`Erro ao aceitar monitor. Erro: ${error}`);
    }
  }, [error]);

  return {
    isLoading,
    isSuccess,
    isOpen,
    currentMonitor,
    handleAcceptMonitorClick,
    handleCloseModal,
    handleOpenAcceptModal,
  };
};

export default useAcceptMonitorModal;
