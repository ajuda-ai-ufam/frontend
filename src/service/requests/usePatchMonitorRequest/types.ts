export type TPatchMonitorErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};

export type TMonitorSettings = {
  availability: TAvailability[];
  preferentialPlace: string;
};

export type TAvailability = {
  weekDay: number;
  hours: TAvailabilityHours[];
};

export type TAvailabilityHours = {
  start: string;
  end: string;
};
