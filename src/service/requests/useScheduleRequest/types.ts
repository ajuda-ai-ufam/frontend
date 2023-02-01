export type TScheduleRequest = {
  monitorId: number;
  start: string;
  end: string;
};

export type TScheduleErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
