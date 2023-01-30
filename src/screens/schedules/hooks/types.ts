import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';

export type TFormatedSchedules = {
  month: string;
  day: number;
  weekDay: string;
  events: TSchedules[];
};

export enum ScheduleDetailsModalType {
  LOADING = 'loading',
  CONFIRMED = 'confirmed',
  DENIED = 'denied',
  DEFAULT = 'default',
}
