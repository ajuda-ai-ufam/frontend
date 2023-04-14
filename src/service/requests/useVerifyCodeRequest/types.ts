import { CodeTypeEnum } from '../../../utils/constants';

export type TVerifyCodeRequestHook = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
  verifyCode(code: string, email: string, codeType: CodeTypeEnum): void;
};

export type TVerifyCodeRequest = {
  code: string;
  email: string;
  type_code: CodeTypeEnum;
};

export type TVerifyCodeErrorResponse = {
  statusCode: number;
  message: string;
};
