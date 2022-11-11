import React from 'react';

export type TCodeVerificationHook = {
  code: string;
  errorMessage: string;
  isVerifyCodeLoading: boolean;
  isGenerateCodeLoading: boolean;
  isSuccess: boolean;
  timeToResendCode: number;
  handleCodeChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleResendCodeClick(): void;
  handleSubmit(e: React.SyntheticEvent<EventTarget>): void;
};

export type TConfirmedEmailHook = {
  handleGoToLoginClick(): void;
};
