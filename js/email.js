import { CONFIG } from "../config/config.js";

export function sendEmail(data) {
  emailjs.init(CONFIG.emailJS.publicKey);

  CONFIG.emails.forEach(email => {
    emailjs.send(CONFIG.emailJS.serviceID, CONFIG.emailJS.templateID, {
      to_email: email,
      ...data
    })
    .then(() => console.log("Email sent to " + email))
    .catch(err => console.error(err));
  });
}
