import { AxiosError } from "axios";

export type ApiError<T = unknown> = AxiosError<{
  message: string;
  errors?: T;
  statusCode?: number;
}>;