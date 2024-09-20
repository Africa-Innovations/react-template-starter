import axiosInstance from "@/lib/axiosInstance";
import { VITE_API_BASE_URL } from "@/lib/utils";
import { AuthStore } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<AuthStore>(() => ({
  signup: {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  },
  login: {
    email: "string",
    password: "string",
  },
}));

export async function signUp(data: {
  email: string;
  password: string;
  re_password: string;
}) {
  try {
    const response = await axiosInstance.post(
      `${VITE_API_BASE_URL}/api/users/`,
      data
    );
  } catch (error) {}
}
