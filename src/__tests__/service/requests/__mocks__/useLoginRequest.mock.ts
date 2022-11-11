import { TLoginRequestHook } from '../../../../service/requests/useLoginRequest/types';

export const useLoginRequestDefaultMockReturn: TLoginRequestHook = {
  isLoading: false,
  isSuccess: false,
  login: jest.fn(),
  resetError: jest.fn(),
};

export const useLoginRequestSuccessResponseMock = {
  data: {
    access_token: 'access_token',
  },
};

export const useLoginRequestErrorResponseMock = {
  response: {
    data: {
      error: 'Forbidden',
      message: 'E-mail e/ou senha inválidos.',
      statusCode: 403,
    },
  },
};

export const useLoginRequestErrorMockReturn: TLoginRequestHook = {
  isLoading: false,
  isSuccess: false,
  login: jest.fn(),
  resetError: jest.fn(),
  error: 'Usuário não verificado.',
};
