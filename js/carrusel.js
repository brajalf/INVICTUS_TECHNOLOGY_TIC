// JavaScript para controlar el carrusel
let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const intervalTime = 3000; // Intervalo de cambio automático (3 segundos)
let carouselInterval;

const updateCarousel = () => {
  // Calcula el desplazamiento en porcentaje
  const offset = -index * (100 / 3); // Ajusta si muestras más o menos ítems
  document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
};

// Función para pasar al siguiente ítem
const nextItem = () => {
  index = (index + 1) % totalItems;
  updateCarousel();
};

// Función para pasar al ítem anterior
const prevItem = () => {
  index = (index - 1 + totalItems) % totalItems;
  updateCarousel();
};

// Configura los controles
document.querySelector('.carousel-controls .prev').addEventListener('click', prevItem);
document.querySelector('.carousel-controls .next').addEventListener('click', nextItem);

// Inicia el intervalo de cambio automático
const startCarousel = () => {
  carouselInterval = setInterval(nextItem, intervalTime);
};

// Detiene el intervalo
const stopCarousel = () => {
  clearInterval(carouselInterval);
};

// Maneja el mouse sobre el carrusel
document.querySelector('.carousel-container').addEventListener('mouseover', stopCarousel);
document.querySelector('.carousel-container').addEventListener('mouseout', startCarousel);

// Inicia el carrusel al cargar
startCarousel();
