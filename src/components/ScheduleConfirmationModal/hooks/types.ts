import { TScheduleEnding } from '../../../service/requests/useGetSchedulesEndingRequest/types';

export type TScheduleConfirmationHook = {
  isOpen: boolean;
  scheduleState?: TScheduleEnding[];
  isSuccessUpdate: boolean;
  isLoadingUpdate: boolean;
  errorUpdate?: string;
  numberScheduleOpens: number;
  selectedSchedule?: TScheduleEnding;
  handleClickDone(schedule: TScheduleEnding): void;
  handleClickNotDone(schedule: TScheduleEnding): void;
  handleCloseModal(): void;
};
