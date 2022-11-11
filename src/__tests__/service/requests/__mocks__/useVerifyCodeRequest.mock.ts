import { TVerifyCodeRequestHook } from '../../../../service/requests/useVerifyCodeRequest/types';

export const useVerifyCodeRequestErrorResponseMock = {
  response: {
    data: {
      error: 'Not found',
      message: 'Código inválido.',
      statusCode: 404,
    },
  },
};

export const useVerifyCodeRequestDefaultMockReturn: TVerifyCodeRequestHook = {
  isLoading: false,
  isSuccess: false,
  verifyCode: jest.fn(),
};

export const useVerifyCodeRequestErrorMockReturn: TVerifyCodeRequestHook = {
  isLoading: false,
  error: 'Código inválido',
  isSuccess: false,
  verifyCode: jest.fn(),
};
