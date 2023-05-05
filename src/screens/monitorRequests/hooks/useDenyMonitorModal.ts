import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDenyMonitorRequest from '../../../service/requests/useDenyMonitorRequest';
import { TMonitorRequest } from '../../../service/requests/useGetAllMonitorRequests/types';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useDenyMonitorModal = () => {
  const navigate = useNavigate();
  const { showErrorSnackBar } = useSnackBar();

  const { isSuccess, isLoading, denyMonitor, error, resetStates } =
    useDenyMonitorRequest();

  const [isOpen, setIsOpen] = useState(false);

  const [currentMonitor, setCurrentMonitor] = useState<TMonitorRequest>();

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStates();

    if (isSuccess) navigate(0);
  };

  const handleOpenDenyModal = (monitor: TMonitorRequest) => {
    setCurrentMonitor(monitor);
    setIsOpen(true);
  };

  const handleDenyMonitorClick = () => {
    denyMonitor(currentMonitor ? currentMonitor.id : 0);
  };

  useEffect(() => {
    if (error) {
      handleCloseModal();
      resetStates();
      showErrorSnackBar(`Erro ao rejeitar monitor(a). Erro: ${error}`);
    }
  }, [error]);

  return {
    isLoading,
    isSuccess,
    isOpen,
    currentMonitor,
    handleDenyMonitorClick,
    handleCloseModal,
    handleOpenDenyModal,
  };
};

export default useDenyMonitorModal;
