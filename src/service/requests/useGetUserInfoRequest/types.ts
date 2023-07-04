export type TUser = {
  name: string;
  email: string;
  description: string;
  enrollment: string;
  course: {
    id: number;
    name: string;
  };
  contact_email: string;
  whatsapp: string;
  linkedin: string;
};

export type TGetUserInfoRequestErrorResponse = {
  statusCode: number;
  message: string;
};
