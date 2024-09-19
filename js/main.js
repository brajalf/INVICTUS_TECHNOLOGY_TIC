// Archivo main.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulación de envío de formulario
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    this.reset();
});

// Animaciones con GSAP
gsap.from('.hero-content h1', { duration: 1.5, y: -50, opacity: 0 });
gsap.from('.hero-content p', { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
gsap.from('.btn', { duration: 1, scale: 0.8, opacity: 0, delay: 1 });
gsap.from('.service-item', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3
});