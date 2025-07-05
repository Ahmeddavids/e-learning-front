import axios, { AxiosError } from "axios";
import { create } from "zustand";

const BASE_URL = "https://e-learning-back-ten.vercel.app/api/v1/auth/users";

interface User {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirm_password: string;
}

interface AuthResponse {
  user: User;
  message: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  message: string | null;
  error: string | null;
  signup: (email: string) => Promise<void>;
  verifyEmail: (verification_token: string, email: string) => Promise<void>;
  getSingleUser: (email: string) => Promise<void>;
  createPassword: (
    email: string,
    password: string,
    confirm_password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  resetPassword: (
    email: string,
    new_password: string,
    confirm_password: string
  ) => Promise<void>;
  forgotpassword: (email: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  checkInbox: (reset_code: string, email: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: null,
  message: null,
  user: null,

  signup: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/email/verification-code`, {
        email,
      });

      set({ user: res.data.data, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as ApiError;
      set({
        error: error?.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      set({ user: res.data.data, isLoading: false });
    } catch (err) {
      const error = err as ApiError;
      set({
        error: error?.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  verifyEmail: async (verification_token, email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post<AuthResponse>(`${BASE_URL}/email/verify`, {
        verification_token,
        email,
      });
      set({ user: res.data.user, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error verifying email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  getSingleUser: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/view?email=${email}`);
      set({ user: res.data.data, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error verifying email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  createPassword: async (email, password, confirm_password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.patch(`${BASE_URL}/set-password`, {
        email,
        password,
        confirm_password,
      });
      set({ user: res.data.data, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error verifying email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  forgotpassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/forgot-password`, { email });
      set({ user: res.data.data, isLoading: false });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error verifying email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  resendVerification: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/email/resend-verification`, {
        email,
      });
      set({ user: res.data.data, isLoading: false });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error Resending email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  checkInbox: async (email, reset_code) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post<AuthResponse>(
        `${BASE_URL}/reset-password/verify`,
        {
          email,
          reset_code,
        }
      );
      set({ user: res.data.user, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error verifying email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
  resetPassword: async (email, new_password, confirm_password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.patch(`${BASE_URL}/reset-password`, {
        email,
        new_password,
        confirm_password,
      });
      set({ user: res.data.data, isLoading: false, message: res.data.message });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage =
        error.response?.data?.message || "Error resetting email";

      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },
}));
