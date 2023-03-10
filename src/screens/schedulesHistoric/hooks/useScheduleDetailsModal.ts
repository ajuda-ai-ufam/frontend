import { useState } from 'react';
import { TSchedules } from '../../../service/requests/useGetSchedulesHistoricRequest/types';

const useScheduleDetailsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<TSchedules>();

  const handleClose = () => {
    setSelectedSchedule(undefined);
    setIsOpen(false);
  };

  const handleOpen = (schedule: TSchedules) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  return {
    selectedSchedule,
    isOpen,
    handleClose,
    handleOpen,
  };
};

export default useScheduleDetailsModal;
