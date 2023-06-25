export type TTopic = {
  id: number;
  name: string;
  token: string;
  updated_at: Date;
  created_at: Date;
};

export type TGetTopicsRequestResponse = {
  data: TTopic[];
  meta: {
    current_page: number;
    items_per_page: number;
    total_pages: number;
    total_items: number;
  };
};

export type TGetTopicsRequestErrorResponse = {
  statusCode: number;
  message: string;
};

export type TGetTopicRequestParams = {
  name?: string;
  pageSize?: number;
  page?: number;
};
