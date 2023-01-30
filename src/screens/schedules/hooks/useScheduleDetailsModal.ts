import { useMemo, useState } from 'react';
import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';
import { SchedulesStatus } from '../../../utils/constants';
import { ScheduleDetailsModalType } from './types';

const useScheduleDetailsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<TSchedules>();

  // TODO - Criar hooks de aceitar e rejeitar monitoria

  const modalType = useMemo(() => {
    if (!selectedSchedule) return ScheduleDetailsModalType.CONFIRMED;

    if (selectedSchedule.id_status === SchedulesStatus.CONFIRMED)
      return ScheduleDetailsModalType.CONFIRMED;

    if (selectedSchedule.id_status === SchedulesStatus.PENDING)
      return ScheduleDetailsModalType.PENDING;

    return ScheduleDetailsModalType.DEFAULT;
  }, [selectedSchedule]);

  const handleClose = () => {
    setSelectedSchedule(undefined);
    setIsOpen(false);
  };

  const handleOpen = (schedule: TSchedules) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  return {
    modalType,
    selectedSchedule,
    isOpen,
    handleClose,
    handleOpen,
  };
};

export default useScheduleDetailsModal;
