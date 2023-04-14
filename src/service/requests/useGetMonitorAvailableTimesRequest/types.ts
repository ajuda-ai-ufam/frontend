export type TMonitorAvailableTime = {
  id: number;
  week_day: number;
  start: string;
  end: string;
  monitor_id: number;
  created_at: string;
  updated_at: string;
};

export type TGetMonitorAvailableTimesRequestResponse = {
  data: TMonitorAvailableTime[];
};

export type TGetMonitorAvailableTimesErrorResponse = {
  statusCode: number;
  message: string;
};
