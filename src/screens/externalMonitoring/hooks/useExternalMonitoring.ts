import { useState, useEffect, useMemo } from 'react';
import { SelectChangeEvent } from '@mui/material';
import useAllSubjectsRequest from '../../../service/requests/useAllSubjectsRequest';
import { TSubjectInput, TCourseInput, TProfessorInput } from './types';
import useCourseRequest from '../../../service/requests/useCourseRequest';
import { ReponsabilityProfessorStatus } from '../../../utils/constants';

const useExternalMonitoring = () => {
  const { getAllSubjects, data: subjects } = useAllSubjectsRequest();
  const { coursesFetch, data: courses } = useCourseRequest();

  const [selectedCourse, setSelectedCourse] = useState<TCourseInput | null>(
    null
  );
  const [selectedSubject, setSelectedSubject] = useState<TSubjectInput | null>(
    null
  );
  const [selectedProfessor, setSelectedProfessor] =
    useState<TProfessorInput | null>(null);

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

  const handleCourseValueChange = (
    event: any,
    newValue: TCourseInput | null
  ) => {
    setSelectedCourse(newValue);
    setSelectedSubject(null);
    setSelectedProfessor(null);
  };

  const handleSubjectValueChange = (
    event: any,
    newValue: TSubjectInput | null
  ) => {
    setSelectedSubject(newValue);
    setSelectedProfessor(null);
  };

  const handleProfessorValueChange = (
    event: any,
    newValue: TProfessorInput | null
  ) => {
    setSelectedProfessor(newValue);
  };

  useEffect(() => {
    void coursesFetch();
    void getAllSubjects();
  }, []);

  return {
    listSubject,
    allCourses,
    selectedCourse,
    selectedSubject,
    selectedProfessor,
    listProfessors,
    handleCourseValueChange,
    handleSubjectValueChange,
    handleProfessorValueChange,
  };
};

export default useExternalMonitoring;
