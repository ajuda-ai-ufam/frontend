export type TGetStudentErrorResponse = {
  statusCode: number;
  message: string;
};

export type TGetAllStudent = {
  user: {
    id: number;
    name: string;
    email: string;
    is_verified: boolean;
  };
  course: {
    name: string;
    code: string;
  };
}[];

export type TListStudents = {
  students: {
    id: number;
    name: string;
    email: string;
  }[];
};
