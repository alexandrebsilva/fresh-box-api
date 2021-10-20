export type PaginatedResponse<T> = {
  total: number;
  page: number;
  payload: T[];
};
