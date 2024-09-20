import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export environment variables
export const { VITE_API_BASE_URL } = import.meta.env;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
