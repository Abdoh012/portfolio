import emailJs from "@emailjs/browser";
import { showError } from "./notifications";
import { env } from "../config/env";

export default async function sendEmail(form, templateId) {
  const res = await emailJs.sendForm(
    env.EMAIL_SERVICE, // Your service id
    templateId, // your template ID
    form,
    env.EMAIL_KEY,
  );

  if (res.status !== 200) {
    throw showError("Failed to send email. Please try again later.");
  }

  return res;
}
