import { SchedulesStatus } from '../../../utils/constants';

export type TCourse = {
  id: number;
  name: string;
};

export type TGetSchedulesHistoricErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};

export type TStudent = {
  id: number;
  enrollment: string;
  name: string;
  email: string;
};

export type TSubject = {
  id: number;
  name: string;
  course: TCourse;
};

export type TMonitor = {
  id: number;
  userId: number;
  enrollment: string;
  name: string;
  email: string;
};

export type TResponsibleProfessor = {
  id: number;
  name: string;
  email: string;
};

export type TSchedules = {
  id: number;
  startDate: Date;
  endDate: Date;
  status: number;
  monitor: TMonitor;
  student: TStudent;
  responsibleProfessor: TResponsibleProfessor;
  subject: TSubject;
  topic?: TScheduleTopic;
  description: string;
};

export type TScheduleTopic = {
  id: number;
  name: string;
};

export type TGetSchedulesHistoricRequestResponse = {
  data: TSchedules[];
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
};

export type TGetSchedulesHistoricRequestErrorResponse = {
  statusCode: number;
  message: string;
};

export type TGetSchedulesHistoricRequestParams = {
  startDate?: Date;
  endDate?: Date;
  page?: number;
  subjectIds?: number[];
  responsibleIds?: number[];
  studentName?: string;
  studentEnrollment?: string;
  status?: SchedulesStatus;
};
