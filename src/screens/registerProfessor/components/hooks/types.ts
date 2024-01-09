export type TRegisterProfessorHook = {
  name: string;
  nameError: string;
  setNameError(name: string): void;
  handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void;

  email: string;
  emailError: string;
  handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setEmailError(email: string): void;

  siape: string;
  siapeError: string;
  setSiapeError(siape: string): void;
  handleSiapeChange(e: React.ChangeEvent<HTMLInputElement>): void;

  password: string;
  passwordError: string;
  showPassword: boolean;
  handleClickShowPassword(): void;
  handleMouseDownPassword(e: React.MouseEvent<HTMLButtonElement>): void;
  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setPasswordError(password: string): void;

  confPassword: string;
  confPasswordError: string;
  showConfirmPassword: boolean;
  handleClickShowConfirmPassword(): void;
  handleConfPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
  setConfPasswordError(confPassword: string): void;

  error?: string;
  isLoading: boolean;
  isSuccess: boolean;

  handleCancelClick(): void;
  handleContinueClick(e: React.SyntheticEvent<EventTarget>): void;
};
