export type TMonitorAvailabilityRequest = {
  weekDay: number;
  start: string;
  end: string;
};

export type TMonitorAvailabilityErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};

export type TDayHourAvailable = {
  day: number;
  start: string;
  end: string;
};
