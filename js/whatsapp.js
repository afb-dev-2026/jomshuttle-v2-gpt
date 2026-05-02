import { CONFIG } from "../config/config.js";

export function sendWhatsApp(data) {
  const message = `
🚐 *JomShuttle Booking*

Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}

Pickup: ${data.pickup}
Dropoff: ${data.dropoff}

Date: ${data.date}
Time: ${data.time}
`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
