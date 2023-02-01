export type TMonitorAvailabilityRequest = {
  availability: TAvailability[];
};

export type TAvailability = {
  weekDay: number;
  hours: TAvailabilityHours[];
}

export type TAvailabilityHours = {
  start: string;
  end: string;
}

export type TMonitorAvailabilityErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
