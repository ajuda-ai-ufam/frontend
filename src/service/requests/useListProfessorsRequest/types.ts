export type TSubjectResponsability = {
  status: 'Pendente';
  subject: {
    name: string;
    code: string;
  };
};

export type TProfessor = {
  id: number;
  name: string;
  email: string;
  is_verified: false;
};

export type TProfessorData = {
  user: TProfessor;
  SubjectResponsability: TSubjectResponsability[];
};

export type TListProfessorsResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
  data: TProfessorData[];
};

export type TListProfessorsParams = {
  quantity?: number;
  number?: number;
  page?: number;
  field?: string;
  order?: 'asc' | 'desc';
  search?: string;
};

export type TListProfessorsErrorResponse = {
  statusCode: number;
  message: string;
};
