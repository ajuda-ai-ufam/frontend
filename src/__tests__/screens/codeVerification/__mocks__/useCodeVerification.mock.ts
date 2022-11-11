import { TCodeVerificationHook } from '../../../../screens/codeVerification/hooks/types';

export const useCodeVerificationDefaultMockReturn: TCodeVerificationHook = {
  code: '',
  errorMessage: '',
  isVerifyCodeLoading: false,
  isGenerateCodeLoading: false,
  isSuccess: false,
  timeToResendCode: 60,
  handleCodeChange: jest.fn(),
  handleResendCodeClick: jest.fn(),
  handleSubmit: jest.fn(),
};

export const useCodeVerificationInvalidCodeMockReturn: TCodeVerificationHook = {
  ...useCodeVerificationDefaultMockReturn,
  code: '123456',
  errorMessage: 'Código inválido.',
};

export const useCodeVerificationLoadingVerifyMockReturn: TCodeVerificationHook =
  {
    ...useCodeVerificationDefaultMockReturn,
    code: '123456',
    isVerifyCodeLoading: true,
  };

export const useCodeVerificationLoadingGenerateMockReturn: TCodeVerificationHook =
  {
    ...useCodeVerificationDefaultMockReturn,
    isGenerateCodeLoading: true,
    timeToResendCode: 0,
  };

export const useCodeVerificationSuccessMockReturn: TCodeVerificationHook = {
  ...useCodeVerificationDefaultMockReturn,
  isSuccess: true,
  code: '123456',
};

export const useCodeVerificationGenerateEnabledMockReturn: TCodeVerificationHook =
  {
    ...useCodeVerificationDefaultMockReturn,
    timeToResendCode: 0,
  };
