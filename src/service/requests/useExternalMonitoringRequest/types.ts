export type TExternalMonitoringParams = {
  student_id?: number;
  student_name: string;
  monitor_id: number;
  professor_id: number;
  start: string;
  end: string;
  schedule_topic_id?: number | undefined;
  description?: string;
};

export type TExternalMonitoringError = {
  statusCode: number;
  message: string;
  error: string;
};
