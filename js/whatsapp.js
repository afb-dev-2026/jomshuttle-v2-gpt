export function sendWhatsApp(data) {

  const message = `
🚐 JomShuttle Booking

Service: ${data.service}
Pickup: ${data.pickup}
Name: ${data.name}
`;

  const number = "60123456789";

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  );
}
