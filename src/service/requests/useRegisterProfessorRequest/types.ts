export type TRegisterProfessorRequestHook = {
    isLoading: boolean;
    isSuccess: boolean;
    error?: string;
    register(name: string, email: string, password: string): void;
    resetError(): void
};

export type TRegisterProfessorRequest = {
    name: string;
    email: string;
    password: string;
};

export type TRegisterProfessorResponse = {
    access_token: string;
};

export type TRegisterProfessorErrorResponse = {
    statusCode: number;
    message: string;
    error: string;
}