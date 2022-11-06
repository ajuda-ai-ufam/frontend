import { TLoginRequestHook } from '../../../../service/requests/useLoginRequest/types';

export const useLoginRequestDefaultMockReturn: TLoginRequestHook = {
  isLoading: false,
  isSuccess: false,
  login: jest.fn(),
};
