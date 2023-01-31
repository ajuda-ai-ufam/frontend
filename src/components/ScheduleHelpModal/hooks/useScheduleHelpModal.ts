import { SelectChangeEvent } from '@mui/material';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import useGetMonitorAvailableTimesRequest from '../../../service/requests/useGetMonitorAvailableTimesRequest';
import { TCompleteSubject } from '../../../service/requests/useGetSubject/types';
import useScheduleRequest from '../../../service/requests/useScheduleRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useScheduleHelpModal = () => {
  const { showErrorSnackBar, showSuccessSnackBar } = useSnackBar();
  const {
    data: monitorAvailableTimes,
    isLoading: isLoadingMonitorAvailableTimes,
    getMonitorAvailableTimes,
  } = useGetMonitorAvailableTimesRequest();
  const {
    schedule,
    isLoading: isScheduleLoading,
    isSuccess: isScheduleSuccess,
    error: scheduleError,
    resetStates: resetScheduleStates,
  } = useScheduleRequest();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<TCompleteSubject>();
  const [selectedProfessorId, setSelectedProfessorId] = useState(-1);
  const [selectedMonitorId, setSelectedMonitorId] = useState(-1);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedHourIndex, setSelectedHourIndex] = useState(-1);

  const availableMonitors = useMemo(() => {
    if (!selectedSubject || selectedProfessorId === -1) return [];

    return selectedSubject.monitors.filter(
      (monitor) => monitor.responsable.id === selectedProfessorId
    );
  }, [selectedProfessorId, selectedSubject]);

  const availableHours = useMemo(() => {
    if (!monitorAvailableTimes || !selectedDate) return [];

    const availableDayTime = monitorAvailableTimes.find(
      (time) => time.week_day === selectedDate.day()
    );
    if (!availableDayTime) return [];

    const startHour = Number(availableDayTime.start.split(':')[0]);
    const endHour = Number(availableDayTime.end.split(':')[0]);

    const availableHours = [];
    for (let hour = startHour; hour < endHour; hour++) {
      availableHours.push(`${hour}:00 às ${hour + 1}:00`);
    }

    return availableHours;
  }, [selectedDate, monitorAvailableTimes]);

  const handleClose = () => {
    resetScheduleStates();
    setShowConfirmation(false);
    setSelectedHourIndex(-1);
    setSelectedDate(null);
    setSelectedMonitorId(-1);
    setSelectedProfessorId(-1);
    setIsOpen(false);
  };

  const handleOpen = (subject: TCompleteSubject) => {
    setSelectedSubject(subject);
    setIsOpen(true);
  };

  const handleConfirmSchedule = () => {
    if (selectedMonitorId === -1 || selectedHourIndex === -1 || !selectedDate)
      return;

    const hour = availableHours[selectedHourIndex].split(' às ');
    const start = `${selectedDate.format('YYYY-MM-DD')} ${hour[0]}`;
    const end = `${selectedDate.format('YYYY-MM-DD')} ${hour[1]}`;

    void schedule(selectedMonitorId, start, end);
  };

  const handleShowConfirmation = () => setShowConfirmation(true);

  const handleEditData = () => setShowConfirmation(false);

  const handleChangeProfessor = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSelectedMonitorId(-1);
    setSelectedDate(null);
    setSelectedHourIndex(-1);
    setSelectedProfessorId(Number(value));
  };

  const handleChangeMonitor = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    if (Number(value) === -1) {
      setSelectedDate(null);
      setSelectedHourIndex(-1);
    }

    setSelectedMonitorId(Number(value));
  };

  const handleChangeDate = (value: moment.Moment | null) => {
    setSelectedHourIndex(-1);
    setSelectedDate(value);
  };

  const handleChangeHour = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSelectedHourIndex(Number(value));
  };

  useEffect(() => {
    if (selectedMonitorId === -1) return;

    void getMonitorAvailableTimes(selectedMonitorId);
  }, [selectedMonitorId]);

  useEffect(() => {
    if (!scheduleError) return;

    showErrorSnackBar(`Erro ao agendar monitoria: ${scheduleError}`);
    resetScheduleStates();
  }, [scheduleError]);

  useEffect(() => {
    if (!isScheduleSuccess) return;

    showSuccessSnackBar(`Monitoria agendada com sucesso!`);
  }, [isScheduleSuccess]);

  return {
    availableHours,
    availableMonitors,
    isLoadingMonitorAvailableTimes,
    isScheduleLoading,
    isScheduleSuccess,
    isOpen,
    monitorAvailableTimes,
    selectedDate,
    selectedHourIndex,
    selectedMonitorId,
    selectedProfessorId,
    selectedSubject,
    showConfirmation,
    handleChangeDate,
    handleChangeHour,
    handleChangeMonitor,
    handleChangeProfessor,
    handleClose,
    handleConfirmSchedule,
    handleEditData,
    handleOpen,
    handleShowConfirmation,
  };
};

export default useScheduleHelpModal;
