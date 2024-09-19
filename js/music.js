// music.js
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.1; // Establece el volumen al 10%
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        }
    });
});