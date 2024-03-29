import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';

export type TPreferentialPlaceProperties = {
  isWarning?: boolean;
  message?: string;
  preferentialPlace?: string;
};

export type TFormatedSchedules = {
  month: string;
  day: number;
  weekDay: string;
  events: TSchedules[];
};

export enum ScheduleDetailsModalType {
  LOADING = 'loading',
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  REFUSED = 'refused',
  DEFAULT = 'default',
  CANCELED = 'canceled',
}
