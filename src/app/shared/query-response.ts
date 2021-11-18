export interface QueryResponse<T> {
  data: T[];
  success: boolean;
  totalCount?: number;
}
