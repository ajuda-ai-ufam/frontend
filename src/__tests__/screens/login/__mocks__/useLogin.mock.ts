import { TLoginHook } from '../../../../screens/login/hooks/types';

export const useLoginDefaultMockReturn: TLoginHook = {
  email: '',
  password: '',
  isLoading: false,
  isInvalidEmail: false,
  isInvalidPassword: false,
  showPassword: false,
  handleClickShowPassword: jest.fn(),
  handleEmailChange: jest.fn(),
  handleLoginClick: jest.fn(),
  handleMouseDownPassword: jest.fn(),
  handlePasswordChange: jest.fn(),
  handleRegisterClick: jest.fn(),
};

export const useLoginInvalidEmailMockReturn: TLoginHook = {
  ...useLoginDefaultMockReturn,
  email: 'invalid',
  isInvalidEmail: true,
};

export const useLoginInvalidPasswordMockReturn: TLoginHook = {
  ...useLoginDefaultMockReturn,
  password: '',
  isInvalidPassword: true,
};

export const useLoginShowPasswordMockReturn: TLoginHook = {
  ...useLoginDefaultMockReturn,
  password: '123456789',
  showPassword: true,
};

export const useLoginLoadingMockReturn: TLoginHook = {
  ...useLoginDefaultMockReturn,
  email: 'email@icomp.ufam.edu.br',
  password: '12345678',
  isLoading: true,
};

export const useLogindInvalidMockReturn: TLoginHook = {
  ...useLoginDefaultMockReturn,
  email: 'email@icomp.ufam.edu.br',
  password: '12345678',
  error: 'Login e/ou senha inválidos',
};
