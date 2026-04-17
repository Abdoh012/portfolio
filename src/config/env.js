import { showError } from "@/data/notifications";

export const env = {
  EMAIL_SERVICE: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAIL_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

if (!env.EMAIL_SERVICE || !env.EMAIL_KEY) {
  throw showError("Missing environment variables");
}
