import { sendWhatsApp } from "./whatsapp.js";
import { sendEmail } from "./email.js";

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Honeypot check
  if (document.querySelector('[name="company"]').value !== "") {
    return; // bot detected
  }

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    pickup: document.getElementById("pickup").value,
    dropoff: document.getElementById("dropoff").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  sendWhatsApp(data);
  sendEmail(data);
});
