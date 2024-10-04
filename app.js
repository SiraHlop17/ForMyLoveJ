// Música de fondo
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = false;

musicButton.addEventListener("click", function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = "♪";
    } else {
        backgroundMusic.play();
        musicButton.textContent = "II";
    }
    isPlaying = !isPlaying;
});

// Fecha de aniversario (por ejemplo, el próximo mes)
const aniversario = new Date("Nov 4, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = aniversario - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;

    if (diferencia < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡Feliz Aniversario!";
    }
}, 1000);

document.getElementById('liveAlertBtn').addEventListener('click', function() {
    const messages = [
        'Te amo mi niño',
        'Gracias por todo',
        'Estoy orgullosa de ti',
        'Te quiero muchito',
        'Eres mi motor y motivo jaskj',
        'Te amo nunca lo olvides'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)]; // Selecciona un mensaje aleatorio

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success';
    alertDiv.innerText = randomMessage; // Muestra el mensaje aleatorio

    alertPlaceholder.appendChild(alertDiv);

    // Mueve la alerta hacia arriba
    setTimeout(() => {
        alertDiv.style.transform = 'translateY(-200%)'; // Sube la alerta
    }, 10);

    // Elimina la alerta después de 2 segundos
    setTimeout(() => {
        alertDiv.style.opacity = '0'; // Desvanece la alerta
        setTimeout(() => {
            alertDiv.remove(); // Elimina el elemento del DOM
        }, 500); // Espera a que termine la animación de opacidad
    }, 1000); // 2 segundos antes de empezar a desvanecer
});



