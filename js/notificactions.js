// Simula datos de notificaciones
const notifications = {
    email: 13,
    whatsapp: 7,
    call: 7,
    messenger: 7,
    instagram: 7,
    linkedin: 12,
    twitter: 15,
    tiktok: 77,
  };
  
  // Actualiza los badges dinámicamente
  Object.keys(notifications).forEach(key => {
    const button = document.querySelector(`.social-btn.${key} .notification-badge`);
    if (button) {
      button.textContent = notifications[key]; // Asigna el número de notificaciones
    }
  });