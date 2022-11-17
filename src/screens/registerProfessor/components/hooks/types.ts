export type TRegisterProfessorHook = {
    handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleConfPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleLoginClick(): void;
    handleContinueClick(e: React.SyntheticEvent<EventTarget>): void;
    name: string;
    email: string;
    password: string;
    confPassword: string;
    error?: string;
    isLoading: boolean;
    isSuccess: boolean;
    nameError: string;
    emailError: string;
    passwordError: string;
    confPasswordError: string;
};