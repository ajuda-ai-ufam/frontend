import { useEffect, useState } from 'react';
import useGetSchedulesEndingRequest from '../../../service/requests/useGetSchedulesEndingRequest';
import { TScheduleEnding } from '../../../service/requests/useGetSchedulesEndingRequest/types';
import useUpdateScheduleEndingRequest from '../../../service/requests/useUpdateScheduleEndingRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useScheduleEndingFormat from './useScheduleEndingFormat';
import { SchedulesStatus } from '../../../utils/constants';

const useScheduleConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showErrorSnackBar, showSuccessSnackBar, showInfoSnackBar } =
    useSnackBar();
  const { data: schedulesEnding, getSchedulesEnding } =
    useGetSchedulesEndingRequest();

  const {
    isSuccess: isSuccessUpdate,
    isLoading: isLoadingUpdate,
    error: errorUpdate,
    updateScheduleEnding,
  } = useUpdateScheduleEndingRequest();

  const [scheduleState, setScheduleState] = useState<TScheduleEnding[]>([]);
  const [numberScheduleOpens, setNumberScheduleOpens] = useState(0);
  const [realized, setRealized] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<TScheduleEnding>();

  const resetState = () => {
    setRealized(false);
  };

  const handleClickDone = (schedule: TScheduleEnding) => {
    setRealized(true);
    setSelectedSchedule(schedule);
    updateScheduleEnding(schedule.id, true);
  };

  const handleClickNotDone = (schedule: TScheduleEnding) => {
    setSelectedSchedule(schedule);
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
    if (!schedulesEnding?.data.length) return;

    setIsOpen(true);
    setScheduleState(useScheduleEndingFormat(schedulesEnding));

    setNumberScheduleOpens(schedulesEnding.data.length);
  }, [schedulesEnding]);

  useEffect(() => {
    if (errorUpdate) {
      showErrorSnackBar(
        `Não foi possível concluir a ação, tente novamente. Erro: ${errorUpdate}`
      );
    }
  }, [errorUpdate]);

  useEffect(() => {
    if (isSuccessUpdate) {
      realized
        ? showSuccessSnackBar('Monitora realizada.')
        : showSuccessSnackBar('Monitora não realizada.');

      if (selectedSchedule) {
        const index = scheduleState.indexOf(selectedSchedule);
        realized
          ? (scheduleState[index].status = SchedulesStatus.REALIZED)
          : (scheduleState[index].status = SchedulesStatus.NOT_REALIZED);
        setScheduleState(scheduleState);
        setNumberScheduleOpens(numberScheduleOpens - 1);
      }

      resetState();
    }
  }, [isSuccessUpdate]);

  return {
    isOpen,
    scheduleState,
    isSuccessUpdate,
    isLoadingUpdate,
    errorUpdate,
    numberScheduleOpens,
    selectedSchedule,
    handleCloseModal,
    handleClickDone,
    handleClickNotDone,
  };
};

export default useScheduleConfirmation;
