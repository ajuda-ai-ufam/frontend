import { useState, useEffect, useMemo, SyntheticEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { TStudentInput } from './types';
import { TypeMonitorStatus } from '../../../utils/constants';
import useGetStudent from '../../../service/requests/useGetStudent';
import { HOURS_OPTIONS } from './constants';
import useTopics from '../../../components/ScheduleHelpModal/hooks/useTopics';
import useAddTopicRequest from '../../../service/requests/useAddTopicRequest';
import useExternalMonitoringRequest from '../../../service/requests/useExternalMonitoringRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from '../../../utils/renderSnackBar';
import useGetSubject from '../../../service/requests/useGetSubject';
import {
  TCompleteSubject,
  TSubjectResponsible,
} from '../../../service/requests/useGetSubject/types';

const useExternalMonitoring = () => {
  const user = useGetLoggedUser();
  const navigate = useNavigate();
  const { showErrorSnackBar } = useSnackBar();

  const { getStudents, data: students } = useGetStudent();
  const { data: subjectData, getSubject } = useGetSubject();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedHourIndex, setSelectedHourIndex] = useState(-1);
  const [description, setDescription] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<TStudentInput | null>(
    null
  );
  const [selectedSubject, setSelectedSubject] = useState<
    TCompleteSubject | undefined
  >(undefined);
  const [professorResponsible, setProfessorResponsible] = useState<
    TSubjectResponsible | undefined
  >();

  const {
    handleChangeTopicInput,
    handleChangeTopicValue,
    isLoadingTopics,
    options,
    topicInputValue,
    selectedTopic,
  } = useTopics();

  const {
    addTopic,
    data: addedTopic,
    resetStates: resetAddTopicStates,
    error: topicAddError,
  } = useAddTopicRequest();

  const {
    externalMonitoringRegister,
    isLoading: isLoadingExternalMonitoring,
    isSuccess: isSuccessExternalMonitoring,
    error: externalMonitoringError,
    resetStates: resetExternalMonitoringStates,
  } = useExternalMonitoringRequest();

  const allStudents = useMemo(() => {
    const listStudents = students?.students
      .filter((student) => student.name != user?.username)
      .map((student) => ({
        id: student.id,
        name: student.name,
        email: student.email,
        input: `${student.name} - ${student.email}`,
      }));

    return listStudents;
  }, [students]);

  const handleStudentValueChange = (
    event: SyntheticEvent,
    newValue: TStudentInput | null
  ) => {
    setSelectedStudent(newValue);
    setSelectedDate(null);
    setSelectedHourIndex(-1);
  };

  const handleChangeDate = (value: moment.Moment | null) => {
    setSelectedHourIndex(-1);
    setSelectedDate(value);
  };

  const confirmDisable = useMemo(() => {
    if (
      !selectedDate ||
      !selectedHourIndex ||
      !professorResponsible ||
      !selectedStudent ||
      !selectedSubject ||
      selectedHourIndex == -1
    ) {
      return true;
    }

    return false;
  }, [
    selectedDate,
    selectedHourIndex,
    professorResponsible,
    selectedStudent,
    selectedSubject,
    selectedHourIndex,
  ]);

  const formatStartAndEndDate = () => {
    let start = '';
    let end = '';

    if (selectedDate) {
      start = `${selectedDate.format('YYYY-MM-DD')} ${
        HOURS_OPTIONS[selectedHourIndex]
      }`;
      end = `${selectedDate.format('YYYY-MM-DD')} ${
        HOURS_OPTIONS[selectedHourIndex + 1]
      }`;
    }

    return { start, end };
  };

  const handleChangeHour = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSelectedHourIndex(Number(value));
  };

  const handleShowConfirmation = () => setShowConfirmation(true);

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleConfirmExternalMonitoring = () => {
    if (
      selectedHourIndex === -1 ||
      !selectedDate ||
      !professorResponsible ||
      !selectedStudent ||
      !selectedSubject
    )
      return;

    if (selectedTopic?.isNew) {
      void addTopic({ name: selectedTopic.inputValue });
      return;
    }

    const formatedDates = formatStartAndEndDate();
    void externalMonitoringRegister({
      description: description,
      end: formatedDates.end,
      monitor_id: user?.monitor?.id || -1,
      professor_id: professorResponsible.professor.user.id,
      schedule_topic_id: selectedTopic?.id,
      start: formatedDates.start,
      student_id: selectedStudent.id,
      student_name: selectedStudent.name,
    });
  };

  const handleEditData = () => setShowConfirmation(false);

  const handleCompleteRegister = () => {
    navigate(0);
  };

  useEffect(() => {
    void getStudents();
    if (user?.monitor?.id_status === TypeMonitorStatus.AVAILABLE) {
      void getSubject(user.monitor.subject_id);
    }
    return;
  }, []);

  useEffect(() => {
    if (subjectData) {
      setSelectedSubject(subjectData);
    }
    return;
  }, [subjectData]);

  useEffect(() => {
    if (user?.monitor) {
      setProfessorResponsible(
        selectedSubject?.responsables.filter(
          (prof) =>
            prof.professor.user.id == user.monitor?.responsible_professor_id
        )[0]
      );
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (
      !addedTopic ||
      selectedHourIndex === -1 ||
      !selectedDate ||
      !professorResponsible ||
      !selectedStudent ||
      !selectedSubject
    )
      return;

    const formatedDates = formatStartAndEndDate();

    void externalMonitoringRegister({
      description: description,
      end: formatedDates.end,
      monitor_id: user?.monitor?.id || -1,
      professor_id: professorResponsible.professor.user.id,
      schedule_topic_id: addedTopic.id,
      start: formatedDates.start,
      student_id: selectedStudent.id,
      student_name: selectedStudent.name,
    });
    resetAddTopicStates();
  }, [addedTopic]);

  useEffect(() => {
    if (!topicAddError) return;

    showErrorSnackBar(
      `Não foi possível adicionar novo assunto, tente outro termo ou tente novamente mais tarde. Erro: ${topicAddError}`
    );
    resetAddTopicStates();
  }, [topicAddError]);

  useEffect(() => {
    if (!externalMonitoringError) return;

    showErrorSnackBar(
      `Erro ao registrar monitoria externa. Erro:${externalMonitoringError.message}`
    );
    resetExternalMonitoringStates();
  }, [externalMonitoringError]);

  return {
    allStudents,
    description,
    handleChangeDate,
    handleChangeHour,
    handleShowConfirmation,
    handleStudentValueChange,
    professorResponsible,
    selectedDate,
    selectedHourIndex,
    selectedStudent,
    showConfirmation,
    selectedSubject,
    handleChangeTopicInput,
    handleChangeTopicValue,
    isLoadingTopics,
    options,
    selectedTopic,
    topicInputValue,
    handleChangeDescription,
    confirmDisable,
    handleCompleteRegister,
    handleEditData,
    isLoadingExternalMonitoring,
    isSuccessExternalMonitoring,
    handleConfirmExternalMonitoring,
  };
};

export default useExternalMonitoring;
