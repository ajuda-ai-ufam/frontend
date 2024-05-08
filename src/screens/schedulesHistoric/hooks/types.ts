import { Dayjs } from 'dayjs';
import { TSchedules } from '../../../service/requests/useGetSchedulesHistoricRequest/types';
import { TExternalMonitoringRequest } from '../../../service/requests/useGetExternalMonitoringRequest/types';

export type TFormatedSchedules = {
  year: string;
  month: string;
  day: number;
  weekDay: string;
  events: TSchedules[];
};

export type TFormatedSchedulesExternalMonitoring = {
  year: string;
  month: string;
  day: number;
  weekDay: string;
  events: TExternalMonitoringRequest[];
};

export type TSchedulesHistoricFilters = {
  month: string;
  day: number;
  weekDay: string;
  events: TSchedules[];
};

export type TScheduleHistoricFilters = {
  nameOrEnrollFilter: string;
  responsiblesOrSubjectsFilter: string[];
  beginDateFilter: Dayjs | null;
  endDateFilter: Dayjs | null;
};
