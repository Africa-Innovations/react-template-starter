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
