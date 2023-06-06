export type TResetPasswordToken = {
  code: string;
  expiresAt: string;
  userName: string;
  userId: number;
  iat: number;
};
