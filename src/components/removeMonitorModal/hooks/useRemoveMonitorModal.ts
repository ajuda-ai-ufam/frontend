import { useState, useEffect, useMemo } from 'react';
import { TSubjectMonitor } from '../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../utils/constants';
import useRemoveMonitorRequest from '../../../service/requests/useRemoveMonitorRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { useNavigate } from 'react-router-dom';

const useRemoveMonitorModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonitor, setSelectedMonitor] = useState<TSubjectMonitor>();
  const user = useGetLoggedUser();
  const [showMonitorData, setShowMonitorData] = useState(true);

  const { showErrorSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const { isLoading, isSuccess, error, removeMonitor } =
    useRemoveMonitorRequest();

  const handleOpenRemoveMonitorModal = (monitor: TSubjectMonitor) => {
    setSelectedMonitor(monitor);
    setIsOpen(true);
  };

  const isMyMonitor = useMemo(() => {
    if (user?.type_user_id === TypeUserEnum.COORDINATOR) {
      return true;
    }

    if (user?.sub === selectedMonitor?.responsable.id) {
      return true;
    }
    return false;
  }, [selectedMonitor]);

  const handleRemoveMonitorClick = () => {
    setShowMonitorData(false);
  };

  const handleEndingMonitoringClick = () => {
    if (selectedMonitor) {
      removeMonitor(selectedMonitor.id);
    }
  };

  const handleClose = () => {
    setSelectedMonitor(undefined);
    setShowMonitorData(true);
    setIsOpen(false);

    if (isSuccess) navigate(0);
  };

  useEffect(() => {
    if (error) {
      showErrorSnackBar(
        `Não foi possível remover o(a) monitor(a), tente novamente mais tarde. Erro ${error}`
      );
      setSelectedMonitor(undefined);
      setShowMonitorData(true);
      setIsOpen(false);
    }
  }, [error]);

  return {
    isOpen,
    selectedMonitor,
    showMonitorData,
    isLoading,
    isSuccess,
    isMyMonitor,
    handleOpenRemoveMonitorModal,
    handleRemoveMonitorClick,
    handleEndingMonitoringClick,
    handleClose,
  };
};

export default useRemoveMonitorModal;
