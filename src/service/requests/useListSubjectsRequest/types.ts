import { ReponsabilityProfessorStatus } from '../../../utils/constants';
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
