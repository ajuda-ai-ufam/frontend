import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAcceptScheduleRequest from '../../../service/requests/useAcceptScheduleRequest';
import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';
import useRefuseScheduleRequest from '../../../service/requests/useRefuseScheduleRequest';
import { SchedulesStatus } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { ScheduleDetailsModalType } from './types';

const useScheduleDetailsModal = () => {
  const navigate = useNavigate();
  const { showErrorSnackBar, showSuccessSnackBar } = useSnackBar();
  const {
    acceptSchedule,
    error: acceptError,
    isLoading: isAcceptLoading,
    isSuccess: isAcceptSuccess,
    resetStates: resetAcceptStates,
  } = useAcceptScheduleRequest();
  const {
    refuseSchedule,
    error: refuseError,
    isLoading: isRefuseLoading,
    isSuccess: isRefuseSuccess,
    resetStates: resetRefuseStates,
  } = useRefuseScheduleRequest();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<TSchedules>();

  const modalType = useMemo(() => {
    if (!selectedSchedule) return ScheduleDetailsModalType.CONFIRMED;

    if (isAcceptLoading || isRefuseLoading)
      return ScheduleDetailsModalType.LOADING;

    if (isRefuseSuccess) return ScheduleDetailsModalType.REFUSED;

    if (isAcceptSuccess) return ScheduleDetailsModalType.CONFIRMED;

    if (selectedSchedule.id_status === SchedulesStatus.CONFIRMED)
      return ScheduleDetailsModalType.CONFIRMED;

    if (selectedSchedule.id_status === SchedulesStatus.PENDING)
      return ScheduleDetailsModalType.PENDING;

    return ScheduleDetailsModalType.DEFAULT;
  }, [
    selectedSchedule,
    isAcceptLoading,
    isRefuseLoading,
    isRefuseSuccess,
    isAcceptSuccess,
  ]);

  const handleAcceptSchedule = () => {
    if (!selectedSchedule) return;

    void acceptSchedule(selectedSchedule.id);
  };

  const handleClose = () => {
    if (isAcceptSuccess || isRefuseSuccess || acceptError || refuseError)
      navigate(0);

    resetAcceptStates();
    resetRefuseStates();
    setSelectedSchedule(undefined);
    setIsOpen(false);
  };

  const handleRefuseSchedule = () => {
    if (!selectedSchedule) return;

    void refuseSchedule(selectedSchedule.id);
  };

  const handleOpen = (schedule: TSchedules) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!acceptError) return;

    showErrorSnackBar(`Erro ao aceitar agendamento: ${acceptError}`);
  }, [acceptError]);

  useEffect(() => {
    if (!refuseError) return;

    showErrorSnackBar(`Erro ao recusar agendamento: ${refuseError}`);
  }, [refuseError]);

  useEffect(() => {
    if (!isAcceptSuccess) return;

    showSuccessSnackBar(`Agendamento aceito com sucesso.`);
  }, [isAcceptSuccess]);

  useEffect(() => {
    if (!isRefuseSuccess) return;

    showSuccessSnackBar(`Agendamento rejeitado com sucesso.`);
  }, [isRefuseSuccess]);

  return {
    modalType,
    selectedSchedule,
    isAcceptLoading,
    isOpen,
    isRefuseLoading,
    handleAcceptSchedule,
    handleClose,
    handleRefuseSchedule,
    handleOpen,
  };
};

export default useScheduleDetailsModal;
