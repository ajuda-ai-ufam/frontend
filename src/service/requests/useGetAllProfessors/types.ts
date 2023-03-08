export type TStatus = {
  id: number;
  status: string;
};

export type TSubject = {
  name: string;
  code: string;
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  is_verified: boolean;
};

export type TSubjectResponsability = {
  status: TStatus;
  subject: TSubject;
};

export type TProfessor = {
  user: TUser;
  SubjectResponsability: TSubjectResponsability;
};

export type TGetProfessorsErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
