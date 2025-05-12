// src/types/ApiResponseType.ts
export interface ApiResponseType<T> {
    data: T[];
    total: number;
    skip: number;
    limit: number;
  }