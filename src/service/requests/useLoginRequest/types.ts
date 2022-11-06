export type TLoginRequestHook = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
  login(email: string, password: string): void;
};

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  access_token: string;
};

export type TLoginErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
