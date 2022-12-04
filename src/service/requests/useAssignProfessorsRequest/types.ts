export type TAssignProfessorsRequest = {
  professors_ids: number[];
  subject_id: number;
};

export type TAssignProfessorsErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
