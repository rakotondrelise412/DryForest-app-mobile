import { api } from "./api";
import type {
  LoginRequest,
  LoginResponse,
} from "@/models/auth.model";

export const login = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    credentials,
  );

  return response.data;
};