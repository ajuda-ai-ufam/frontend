export type TLoginHook = {
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClickShowPassword(): void;
  handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>): void;
  handleRegisterClick(): void;
  handleLoginClick(e: React.SyntheticEvent<EventTarget>): void;
  email: string;
  password: string;
  showPassword: boolean;
  error?: string;
  isLoading: boolean;
  emailError: string;
  passwordError: string;
};
