import { useState } from 'react';
import { TSubjectMonitor } from '../../../service/requests/useGetSubject/types';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../utils/constants';

const useRemoveMonitorModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonitor, setSelectedMonitor] = useState<TSubjectMonitor>();
  const user = useGetLoggedUser();
  const [modalState, setModalState] = useState(0);

  const handleOpenRemoveMonitorModal = (monitor: TSubjectMonitor) => {
    if (user?.type_user_id === TypeUserEnum.PROFESSOR) {
      if (user.username === monitor.responsable.name) {
        setSelectedMonitor(monitor);

        setIsOpen(true);
      }
    } else {
      setSelectedMonitor(monitor);

      setIsOpen(true);
    }
  };

  const handleRemoveMonitorClick = () => {
    setModalState(1);
  };

  const handleClose = () => {
    setModalState(0);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedMonitor,
    modalState,
    handleOpenRemoveMonitorModal,
    handleRemoveMonitorClick,
    handleClose,
  };
};

export default useRemoveMonitorModal;
