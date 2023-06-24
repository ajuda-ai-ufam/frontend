export type TTopic = {
  id: number;
  name: string;
  token: string;
  updated_at: Date;
  created_at: Date;
};

export type TAddTopicRequestErrorResponse = {
  statusCode: number;
  message: string;
};

export type TAddTopicRequestParams = {
  name: string;
};
