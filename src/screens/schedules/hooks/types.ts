import { TSchedules } from '../../../service/requests/useGetSchedulesRequest/types';

export type TFormatedSchedules = {
  month: string;
  day: number;
  weekDay: string;
  events: TSchedules[];
};
