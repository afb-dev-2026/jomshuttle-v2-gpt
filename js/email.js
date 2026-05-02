import { db } from "./firebase.js";

export function sendEmail(data) {
  emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
    message: JSON.stringify(data)
  });
}
