export type TUpdateUserRequestBody = {
  name?: string;
  password?: string;
  oldPassword?: string;
  description?: string;
  enrollment?: string;
  courseId?: number;
  contactEmail?: string;
  whatsapp?: string;
  linkedin?: string;
};

export type TUpdateUserErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
};
