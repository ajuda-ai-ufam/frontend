import { CodeTypeEnum } from '../../../utils/constants';

export type TGenerateCodeRequestHook = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
  generateCode(email: string, codeType: CodeTypeEnum): void;
};

export type TGenerateCodeRequest = {
  email: string;
  type_code: CodeTypeEnum;
};

export type TGenerateCodeErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
