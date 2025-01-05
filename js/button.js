// Referencias a los elementos
const toggleButton = document.querySelector('.chat-widget-toggle');
const socialButtons = document.querySelector('.social-buttons');
const icon = document.querySelector('.chat-widget-toggle .icon');
const widgetHeader = document.querySelector('#widget-header'); // Corregido el selector para usar ID

// Mostrar encabezado con animación al cargar
window.addEventListener('load', () => {
  setTimeout(() => {
    widgetHeader.classList.add('visible'); // Agrega la clase visible para mostrar con animación
  }, 1000); // Esperar 1 segundo antes de mostrar
});

// Mostrar/Ocultar el menú al hacer clic en el botón flotante
toggleButton.addEventListener('click', () => {
  socialButtons.classList.toggle('active');
  socialButtons.classList.toggle('hidden');
  toggleButton.classList.toggle('active');

  // Cambiar el ícono entre mensaje y "X"
  if (toggleButton.classList.contains('active')) {
    icon.textContent = '❌'; // Cambia a "X"
    widgetHeader.classList.remove('visible'); // Oculta el header
  } else {
    icon.textContent = '💬'; // Cambia a mensaje
    widgetHeader.classList.add('visible'); // Muestra el header
  }
});

