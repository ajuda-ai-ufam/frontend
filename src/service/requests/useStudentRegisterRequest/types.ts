export type TStudentRegisterRequestHook = {
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
  registerStudent(
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
    description: string,
    enrollment: string,
    courseId: number,
    contactEmail: string,
    whatsapp: string,
    linkedin: string
  ): void;
};

export type TStudentRegisterRequest = {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
  description?: string;
  enrollment: string;
  course_id: number;
  contact_email?: string;
  whatsapp?: string;
  linkedin?: string;
};

export type TStudentRegisterErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
