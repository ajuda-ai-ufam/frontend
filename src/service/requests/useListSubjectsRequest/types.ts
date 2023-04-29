import { ReponsabilityProfessorStatus } from '../../../utils/constants';
import { TCompleteSubject } from '../useGetSubject/types';
import { TypeMonitoringStatus } from '../../../utils/constants';

export type TSubject = {
  id: number;
  name: string;
  code: string;
  course_id: number;
};

export type TListSubjectMonitor = {
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
};

export type TListSubjectResponsible = {
  id: number;
  name: string;
  email: string;
};

export type TListCompleteSubject = TSubject & {
  responsables: TListSubjectResponsible[];
  monitors: TListSubjectMonitor[];
};

export type TListSubjectsResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
  data: TListCompleteSubject[];
};

export type TListSubjectsHttpResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
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
  }[];
};

export type TListSubjectsParams = {
  quantity?: number;
  number?: number;
  page?: number;
  field?: string;
  order?: 'asc' | 'desc';
  search?: string;
};

export type TListSubjectsErrorResponse = {
  statusCode: number;
  message: string;
};
