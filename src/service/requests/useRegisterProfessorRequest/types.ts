export type TRegisterProfessorRequestHook = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
  register(
    name: string,
    email: string,
    siape: string,
    password: string,
    confirm_password: string
  ): void;
};

export type TRegisterProfessorRequest = {
  name: string;
  siape: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type TRegisterProfessorErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
