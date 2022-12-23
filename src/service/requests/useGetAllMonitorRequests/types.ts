export type TCourse = {
  name: string;
  code: string;
};

export type TUser = {
  name: string;
};

export type TStatus = {
  status: string;
};

export type TResponsibleProfessor = {
  user: TUser;
};

export type TSubject = {
  id: number;
  name: string;
  code: string;
  course_id: number;
};

export type TStudent = {
  user: TUser;
  course: TCourse;
};

export type TMonitorRequest = {
  id: number;
  id_status: number;
  responsible_professor_id: number;
  student_id: number;
  subject_id: number;
  student: TStudent;
  subject: TSubject;
  responsible_professor: TResponsibleProfessor;
  status: TStatus;
};

export type TListMonitorsRequestResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
  data: TMonitorRequest[];
};

export type TListMonitorsRequestParams = {
  quantity?: number;
  number?: number;
  page?: number;
  field?: string;
  order?: 'asc' | 'desc';
  search?: string;
};

export type TListMonitorsRequestsErrorResponse = {
  statusCode: number;
  message: string;
};
