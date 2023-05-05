import {
  ReponsabilityProfessorStatus,
  TypeMonitoringStatus,
} from '../../../utils/constants';
import { TSubject } from '../useListSubjectsRequest/types';

export type TSubjectResponsible = {
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
};

export type TSubjectMonitor = {
  id: number;
  name: string;
  email: string;
  studentId?: number;
  status?: TypeMonitoringStatus;
  responsable: {
    id: number;
    name: string;
    email: string;
  };
  course: {
    id: number;
    name: string;
  };
  linkedin: string;
  whatsapp: string;
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

      linkedin: string;
      whatsapp: string;
    };
    status: {
      id: number;
      status: string;
    };
  }[];
};

export type TGetSubjectErrorResponse = {
  statusCode: number;
  message: string;
};
