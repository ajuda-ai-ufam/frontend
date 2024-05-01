import { useState, useEffect, useMemo } from 'react';
import { SelectChangeEvent } from '@mui/material';
import useAllSubjectsRequest from '../../../service/requests/useAllSubjectsRequest';
import {
  TSubjectInput,
  TCourseInput,
  TProfessorInput,
  TStudentInput,
} from './types';
import useCourseRequest from '../../../service/requests/useCourseRequest';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';
import useGetStudent from '../../../service/requests/useGetStudent';
import { HOURS_OPTIONS } from './constants';
import useTopics from '../../../components/ScheduleHelpModal/hooks/useTopics';
import useAddTopicRequest from '../../../service/requests/useAddTopicRequest';
import useExternalMonitoringRequest from '../../../service/requests/useExternalMonitoringRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from '../../../utils/renderSnackBar';

const useExternalMonitoring = () => {
  const { getAllSubjects, data: subjects } = useAllSubjectsRequest();
  const { coursesFetch, data: courses } = useCourseRequest();
  const { getStudents, data: students } = useGetStudent();
  const { showErrorSnackBar } = useSnackBar();
  const user = useGetLoggedUser();
  const navigate = useNavigate();

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

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedHourIndex, setSelectedHourIndex] = useState(-1);
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<TCourseInput | null>(
    null
  );
  const [selectedSubject, setSelectedSubject] = useState<TSubjectInput | null>(
    null
  );
  const [selectedProfessor, setSelectedProfessor] =
    useState<TProfessorInput | null>(null);

  const [selectedStudent, setSelectedStudent] = useState<TStudentInput | null>(
    null
  );

  const confirmDisable = useMemo(() => {
    if (
      !selectedCourse ||
      !selectedDate ||
      !selectedHourIndex ||
      !selectedProfessor ||
      !selectedStudent ||
      !selectedSubject ||
      selectedHourIndex == -1
    ) {
      return true;
    }

    return false;
  }, [
    selectedCourse,
    selectedDate,
    selectedHourIndex,
    selectedProfessor,
    selectedStudent,
    selectedSubject,
    selectedHourIndex,
  ]);

  const allStudents = useMemo(() => {
    const listStudents = students?.students.map((student) => ({
      id: student.id,
      name: student.name,
      email: student.name,
      input: `${student.name} - ${student.email}`,
    }));

    return listStudents;
  }, [students]);

  const allCourses = useMemo(() => {
    const formatedCourses = courses
      .filter((course) => course.code != '0000')
      .map((course) => ({
        id: course.id,
        name: course.name,
        code: course.name,
        input: `${course.code} - ${course.name}`,
      }));

    return formatedCourses;
  }, [courses]);

  const listSubject = useMemo(() => {
    if (selectedCourse) {
      const formatedSubjects = subjects
        ?.filter((subject) => subject.course_id === selectedCourse.id)
        .map((subject) => ({
          id: subject.id,
          name: subject.name,
          code: subject.code,
          course_id: subject.course_id,
          input: `${subject.code} - ${subject.name}`,
          SubjectResponsability: subject.SubjectResponsability,
        }));
      return formatedSubjects;
    } else {
      return null;
    }
  }, [selectedCourse]);

  const listProfessors = useMemo(() => {
    if (selectedSubject) {
      const formatedProfessors = selectedSubject.SubjectResponsability.filter(
        (professor) =>
          professor.status.status == ReponsabilityProfessorStatus.APPROVED
      ).map((professor) => ({
        id: professor.professor.user.id,
        name: professor.professor.user.name,
        email: professor.professor.user.email,
      }));
      return formatedProfessors;
    } else {
      return undefined;
    }
  }, [selectedSubject]);

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleStudentValueChange = (
    event: undefined,
    newValue: TStudentInput | null
  ) => {
    setSelectedStudent(newValue);
    setSelectedCourse(null);
    setSelectedSubject(null);
    setSelectedProfessor(null);
  };

  const handleCourseValueChange = (
    event: undefined,
    newValue: TCourseInput | null
  ) => {
    setSelectedCourse(newValue);
    setSelectedSubject(null);
    setSelectedProfessor(null);
  };

  const handleSubjectValueChange = (
    event: undefined,
    newValue: TSubjectInput | null
  ) => {
    setSelectedSubject(newValue);
    setSelectedProfessor(null);
  };

  const handleProfessorValueChange = (
    event: undefined,
    newValue: TProfessorInput | null
  ) => {
    setSelectedProfessor(newValue);
  };

  const handleChangeDate = (value: moment.Moment | null) => {
    setSelectedHourIndex(-1);
    setSelectedDate(value);
  };

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

  const handleEditData = () => setShowConfirmation(false);

  const handleConfirmExternalMonitoring = () => {
    if (
      !selectedCourse ||
      selectedHourIndex === -1 ||
      !selectedDate ||
      !selectedProfessor ||
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
      professor_id: selectedProfessor.id,
      schedule_topic_id: selectedTopic?.id,
      start: formatedDates.start,
      student_id: selectedStudent.id,
      student_name: selectedStudent.name,
    });
  };

  const handleCompleteRegister = () => {
    navigate(0);
  };

  useEffect(() => {
    void coursesFetch();
    void getAllSubjects();
    void getStudents();
  }, []);

  useEffect(() => {
    if (
      !addedTopic ||
      !selectedCourse ||
      selectedHourIndex === -1 ||
      !selectedDate ||
      !selectedProfessor ||
      !selectedStudent ||
      !selectedSubject
    )
      return;

    const formatedDates = formatStartAndEndDate();

    void externalMonitoringRegister({
      description: description,
      end: formatedDates.end,
      monitor_id: user?.monitor?.id || -1,
      professor_id: selectedProfessor.id,
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

    showErrorSnackBar(`Erro ao agendar monitoria: ${externalMonitoringError}`);
    resetExternalMonitoringStates();
  }, [externalMonitoringError]);

  return {
    listSubject,
    allCourses,
    selectedCourse,
    selectedSubject,
    selectedProfessor,
    selectedStudent,
    listProfessors,
    allStudents,
    selectedDate,
    options,
    isLoadingTopics,
    selectedHourIndex,
    topicInputValue,
    selectedTopic,
    description,
    showConfirmation,
    confirmDisable,
    isLoadingExternalMonitoring,
    isSuccessExternalMonitoring,
    handleChangeDescription,
    handleCompleteRegister,
    handleShowConfirmation,
    handleEditData,
    handleChangeTopicInput,
    handleChangeTopicValue,
    handleStudentValueChange,
    handleCourseValueChange,
    handleSubjectValueChange,
    handleProfessorValueChange,
    handleChangeDate,
    handleChangeHour,
    handleConfirmExternalMonitoring,
  };
};

export default useExternalMonitoring;
