import { SelectChangeEvent } from '@mui/material';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import useAddTopicRequest from '../../../service/requests/useAddTopicRequest';
import {
  TCompleteSubject,
  TSubjectMonitor,
} from '../../../service/requests/useGetSubject/types';
import useScheduleRequest from '../../../service/requests/useScheduleRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useTopics from './useTopics';
import { TypeMonitoringStatus } from '../../../utils/constants';
import useGetMonitorRequest from '../../../service/requests/useGetMonitorRequest';

const useScheduleHelpModal = () => {
  const { showErrorSnackBar } = useSnackBar();

  const {
    getMonitor,
    data: monitor,
    isLoading: isLoadingMonitorAvailableTimes,
  } = useGetMonitorRequest();

  const {
    schedule,
    isLoading: isScheduleLoading,
    isSuccess: isScheduleSuccess,
    error: scheduleError,
    resetStates: resetScheduleStates,
  } = useScheduleRequest();

  const {
    handleChangeTopicInput,
    handleChangeTopicValue,
    resetStates: resetTopicsStates,
    isLoadingTopics,
    options,
    topicInputValue,
    selectedTopic,
  } = useTopics();

  const {
    addTopic,
    error: topicAddError,
    data: addedTopic,
    resetStates: resetAddTopicStates,
  } = useAddTopicRequest();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<TCompleteSubject>();
  const [selectedProfessorId, setSelectedProfessorId] = useState(-1);
  const [selectedMonitorId, setSelectedMonitorId] = useState(-1);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedHourIndex, setSelectedHourIndex] = useState(-1);
  const [description, setDescription] = useState('');

  const availableMonitors = useMemo(() => {
    if (!selectedSubject || selectedProfessorId === -1) return [];

    return selectedSubject.monitors.filter(
      (monitor) =>
        monitor.responsable.id === selectedProfessorId &&
        monitor.status === TypeMonitoringStatus.AVAILABLE
    );
  }, [selectedProfessorId, selectedSubject]);

  const availableHours = useMemo(() => {
    if (!monitor || !selectedDate) return [];

    const monitorAvailableTimes = monitor.availability;
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
  }, [selectedDate, monitor]);

  const handleClose = () => {
    resetScheduleStates();
    resetTopicsStates();
    setShowConfirmation(false);
    setSelectedHourIndex(-1);
    setSelectedDate(null);
    setSelectedMonitorId(-1);
    setSelectedProfessorId(-1);
    setDescription('');
    setIsOpen(false);
  };

  const handleOpen = (subject: TCompleteSubject) => {
    setSelectedSubject(subject);
    setIsOpen(true);
  };

  const handleOpenWithMonitor = (
    subject: TCompleteSubject,
    monitor: TSubjectMonitor
  ) => {
    setSelectedSubject(subject);
    setSelectedProfessorId(monitor.responsable.id);
    setSelectedMonitorId(monitor.id);
    setIsOpen(true);
  };

  const formatStartAndEndDate = () => {
    const hour = availableHours[selectedHourIndex].split(' às ');
    let start = '';
    let end = '';

    if (selectedDate) {
      start = `${selectedDate.format('YYYY-MM-DD')} ${hour[0]}`;
      end = `${selectedDate.format('YYYY-MM-DD')} ${hour[1]}`;
    }

    return { start, end };
  };

  const handleConfirmSchedule = () => {
    if (selectedMonitorId === -1 || selectedHourIndex === -1 || !selectedDate)
      return;

    if (selectedTopic?.isNew) {
      void addTopic({ name: selectedTopic.inputValue });
      return;
    }

    const formatedDates = formatStartAndEndDate();

    void schedule(
      selectedMonitorId,
      formatedDates.start,
      formatedDates.end,
      description,
      selectedTopic?.id
    );
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

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (selectedMonitorId === -1) return;

    void getMonitor(selectedMonitorId);
  }, [selectedMonitorId]);

  useEffect(() => {
    if (!scheduleError) return;

    showErrorSnackBar(`Erro ao agendar monitoria: ${scheduleError}`);
    resetScheduleStates();
  }, [scheduleError]);

  useEffect(() => {
    if (
      !addedTopic ||
      selectedMonitorId === -1 ||
      selectedHourIndex === -1 ||
      !selectedDate
    )
      return;

    const formatedDates = formatStartAndEndDate();

    void schedule(
      selectedMonitorId,
      formatedDates.start,
      formatedDates.end,
      description,
      addedTopic.id
    );
    resetAddTopicStates();
  }, [addedTopic]);

  useEffect(() => {
    if (!topicAddError) return;

    showErrorSnackBar(
      `Não foi possível adicionar novo assunto, tente outro termo ou tente novamente mais tarde. Erro: ${topicAddError}`
    );
    resetAddTopicStates();
  }, [topicAddError]);

  return {
    availableHours,
    availableMonitors,
    description,
    isLoadingMonitorAvailableTimes,
    isScheduleLoading,
    isScheduleSuccess,
    isOpen,
    monitorAvailableTimes: monitor?.availability,
    selectedDate,
    selectedHourIndex,
    selectedMonitorId,
    selectedProfessorId,
    selectedSubject,
    showConfirmation,
    selectedTopic,
    options,
    topicInputValue,
    isLoadingTopics,
    handleChangeTopicInput,
    handleChangeTopicValue,
    handleChangeDate,
    handleChangeDescription,
    handleChangeHour,
    handleChangeMonitor,
    handleChangeProfessor,
    handleClose,
    handleConfirmSchedule,
    handleEditData,
    handleOpen,
    handleOpenWithMonitor,
    handleShowConfirmation,
  };
};

export default useScheduleHelpModal;
