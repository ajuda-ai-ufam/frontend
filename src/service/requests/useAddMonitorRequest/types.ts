export type TAddMonitorRequest = {
  subject_id: number;
  professor_id: number;
};

export type TAddMonitorErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
