import { TSubject } from '../useListSubjectsRequest/types';

export type TSubjectResponsible = {
  id: number;
  name: string;
  email: string;
};

export type TSubjectMonitor = {
  id: number;
  name: string;
  email: string;
  studentId?: number;
  responsable: {
    id: number;
    name: string;
    email: string;
  };
  course: {
    id: number;
    name: string;
  };
};

export type TCompleteSubject = TSubject & {
  responsables: TSubjectResponsible[];
  monitors: TSubjectMonitor[];
};

export type TGetSubjectResponse = {
  id: number;
  name: string;
  code: string;
  course_id: number;
  SubjectResponsability: {
    professor: {
      user: {
        id: number;
        name: string;
        email: string;
      };
    };
  }[];
  Monitor: {
    id: number;
    responsible_professor: {
      user: {
        id: number;
        name: string;
        email: string;
      };
    };
    student: {
      user: {
        id: number;
        name: string;
        email: string;
      };
      course: {
        id: number;
        name: string;
      };
    };
  }[];
};

export type TGetSubjectErrorResponse = {
  statusCode: number;
  message: string;
};
