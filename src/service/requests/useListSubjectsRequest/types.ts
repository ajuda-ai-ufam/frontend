import {
  ReponsabilityProfessorStatus,
  TypeMonitoringStatus,
} from '../../../utils/constants';
import { TCompleteSubject } from '../useGetSubject/types';

export type TSubject = {
  id: number;
  name: string;
  code: string;
  course_id: number;
};

export type TListSubjectsResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
  data: TCompleteSubject[];
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
      status: {
        id: number;
        status: TypeMonitoringStatus;
      };
      student: {
        user: {
          id: number;
          name: string;
          email: string;
        };
        enrollment: string;
        course: {
          id: number;
          name: string;
        };
      };
    }[];
    isStudentEnrolled: boolean;
  }[];
};

export type TListSubjectsParams = {
  quantity?: number;
  number?: number;
  page?: number;
  field?: string;
  order?: 'asc' | 'desc';
  search?: string;
  teacherId?: number;
  monitorStatus?: number[];
  onlyEnrollments?: boolean;
};

export type TListSubjectsErrorResponse = {
  statusCode: number;
  message: string;
};
