import {
  ReponsabilityProfessorStatus,
} from '../../../utils/constants';

export type ExternalMonitoringSubject = {
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
}[];

export type TListAllSubjectsHttpResponse = {
  data: {
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
  }[];
};
