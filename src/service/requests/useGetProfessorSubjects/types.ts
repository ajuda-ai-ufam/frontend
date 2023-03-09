export type TCourse = {
  id: number;
  name: string;
  code: string;
};

export type TSubject = {
  id: number;
  code: string;
  name: string;
  course: TCourse;
};

export type TGetProfessorSubjectsErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
