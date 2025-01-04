const slides = document.querySelectorAll('.carousel-slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;
const slideDuration = 10000; // Duración del intervalo en milisegundos

// Mostrar la diapositiva activa
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      slide.querySelector('h1, p').classList.add('animated'); // Agregar clase de animación al texto
    } else {
      slide.querySelector('h1, p').classList.remove('animated'); // Remover clase de animación si no está activa
    }
  });
}

// Avanzar a la siguiente diapositiva
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Retroceder a la diapositiva anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Pausar el slider
function pauseSlider() {
  clearInterval(autoSlideInterval);
}

// Reanudar el slider desde la posición actual
function resumeSlider() {
  clearInterval(autoSlideInterval); // Asegurarse de limpiar cualquier intervalo previo
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, slideDuration);
}

// Iniciar el slider automáticamente
function startAutoSlide() {
  currentIndex = 0; // Mostrar solo el primer slide al cargar
  showSlide(currentIndex);
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, slideDuration);
}

// Detectar eventos de mouse
slides.forEach((slide) => {
  slide.addEventListener('mouseenter', pauseSlider); // Pausar cuando el mouse está sobre el contenido
  slide.addEventListener('mouseleave', resumeSlider); // Reanudar desde la posición actual
});

// Controles manuales
next.addEventListener('click', () => {
  pauseSlider(); // Pausar temporalmente
  nextSlide();
  setTimeout(resumeSlider, slideDuration); // Reanudar después de un tiempo
});

prev.addEventListener('click', () => {
  pauseSlider(); // Pausar temporalmente
  prevSlide();
  setTimeout(resumeSlider, slideDuration); // Reanudar después de un tiempo
});

// Iniciar el slider
startAutoSlide();
