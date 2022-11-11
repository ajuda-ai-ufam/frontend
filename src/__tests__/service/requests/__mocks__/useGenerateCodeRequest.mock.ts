import { TGenerateCodeRequestHook } from '../../../../service/requests/useGenerateCodeRequest/types';

export const useGenerateCodeRequestErrorResponseMock = {
  response: {
    data: {
      error: 'Bad request',
      message: 'Código não gerado.',
      statusCode: 400,
    },
  },
};

export const useGenerateCodeRequestDefaultMockReturn: TGenerateCodeRequestHook =
  {
    isLoading: false,
    isSuccess: false,
    generateCode: jest.fn(),
  };
