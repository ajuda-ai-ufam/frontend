export type TSubject = {
  id: number;
  name: string;
  code: string;
  course_id: 1;
};

export type TListSubjectsResponse = {
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
  data: TSubject[];
};

export type TListSubjectsParams = {
  quantity?: number;
  number?: number;
  page?: number;
  field?: string;
  order?: 'asc' | 'desc';
  search?: string;
};

export type TListSubjectsErrorResponse = {
  statusCode: number;
  message: string;
};
