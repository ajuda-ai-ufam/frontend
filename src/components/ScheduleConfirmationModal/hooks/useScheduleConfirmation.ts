import React, { useEffect, useState } from 'react';
import useGetSchedulesEndingRequest from '../../../service/requests/useGetSchedulesEndingRequest';
import { TScheduleEnding } from '../../../service/requests/useGetSchedulesEndingRequest/types';
import useUpdateScheduleEnding from '../../../service/requests/useUpdateScheduleEnding';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useScheduleConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showErrorSnackBar, showSuccessSnackBar, showInfoSnackBar } =
    useSnackBar();
  const {
    data: schedulesEnding,
    isLoading,
    error,
    getSchedulesEnding,
  } = useGetSchedulesEndingRequest();

  const {
    isSuccess,
    isLoading: isLoadingUpdate,
    error: errorUpdate,
    updateScheduleEnding,
    resetStates,
  } = useUpdateScheduleEnding();

  const [scheduleState, setScheduleState] = useState(schedulesEnding);
  const [numberScheduleOpens, setNumberScheduleOpens] = useState(0);

  const handleClickDone = (schedule: TScheduleEnding) => {
    const index = Number(schedulesEnding?.indexOf(schedule));

    if (schedulesEnding) {
      schedulesEnding[index].status = 4;
    }

    setScheduleState(schedulesEnding);
    setNumberScheduleOpens(numberScheduleOpens - 1);
    updateScheduleEnding(schedule.id, true);
  };

  const handleClickNotDone = (schedule: TScheduleEnding) => {
    const index = Number(schedulesEnding?.indexOf(schedule));

    if (schedulesEnding) {
      schedulesEnding[index].status = 5;
    }

    setScheduleState(schedulesEnding);
    setNumberScheduleOpens(numberScheduleOpens - 1);
    updateScheduleEnding(schedule.id, false);
  };

  const handleCloseModal = () => {
    if (numberScheduleOpens > 0) {
      showInfoSnackBar(
        'Você precisa confirmar os eventos antes de fechar esta janela.'
      );
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    getSchedulesEnding();
  }, []);

  useEffect(() => {
    if (schedulesEnding) {
      if (schedulesEnding.length > 0) {
        setIsOpen(true);
        setScheduleState(schedulesEnding);
        setNumberScheduleOpens(schedulesEnding?.length);
      } else {
        return;
      }
    }
  }, [schedulesEnding]);

  useEffect(() => {
    if (error) {
      showErrorSnackBar(
        `Não foi possível concluir a ação, tente novamente. Erro: ${error}`
      );
    }
  }, [errorUpdate]);

  return {
    isOpen,
    scheduleState,
    isSuccess,
    isLoadingUpdate,
    errorUpdate,
    numberScheduleOpens,
    handleCloseModal,
    handleClickDone,
    handleClickNotDone,
  };
};

export default useScheduleConfirmation;
