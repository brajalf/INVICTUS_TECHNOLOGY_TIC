// main.js
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    // Abrir/cerrar menú al hacer clic en el toggle
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
});