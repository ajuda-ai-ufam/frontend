import { ReponsabilityProfessorStatus } from '../../../utils/constants';

export type TStudentInput = {
  id: number;
  name: string;
  email: string;
  input: string;
};

export type TSubjectInput = {
  id: number;
  name: string;
  code: string;
  input: string;
  course_id: number;
  SubjectResponsability: {
    id: number;
    professor: {
      user: {
        id: number;
        name: string;
        email: string;
      };
    };
    status: {
      id: number;
      status: ReponsabilityProfessorStatus;
    };
  }[];
};

export type TCourseInput = {
  id: number;
  name: string;
  code: string;
  input: string;
};

export type TProfessorInput = {
  id: number;
  name: string;
  email: string;
};
