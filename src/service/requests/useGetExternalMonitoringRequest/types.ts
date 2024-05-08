import { TSchedules } from '../useGetSchedulesHistoricRequest/types';

export type TGetExternalMonitoringParams = {
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  page?: number | undefined;
  subjectIds?: number[] | undefined;
  responsibleIds?: number[] | undefined;
  studentName?: string | undefined;
  studentEnrollment?: string | undefined;
};

export type TExternalMonitorsRequestResponse = {
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
  data: TExternalMonitoringRequest[];
};

export type TExternalMonitoringRequest = TSchedules;

export type TGetExternalMonitoringErrorResponse = {
  statusCode: number;
  message: string;
};
