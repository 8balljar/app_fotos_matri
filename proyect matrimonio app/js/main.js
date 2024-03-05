document.getElementById('start-btn').addEventListener('click', function() {
    var introHeading = document.querySelector('.intro-heading');
    var startBtn = document.getElementById('start-btn');
    var nameInputContainer = document.getElementById('name-input-container');

    introHeading.style.opacity = 0;
    startBtn.style.display = 'none';
    nameInputContainer.style.display = 'block';
});

function animateStartButton() {
    var startBtn = document.getElementById('start-btn');
    startBtn.classList.add('animate__fadeOut'); // Agregar clase de animación de desvanecimiento
    startBtn.addEventListener('animationend', function() {
        // Después de que termine la animación de desvanecimiento, cambiar el color y agregar otra animación
        startBtn.style.backgroundColor = '#27ae60'; // Cambiar el color del botón
        startBtn.textContent = '¡Listo!';
        startBtn.classList.remove('animate__fadeOut'); // Quitar la clase de animación de desvanecimiento
        startBtn.classList.add('animate__fadeIn'); // Agregar clase de animación de aparición
    });
}

document.getElementById('submit-btn').addEventListener('click', function() {
    var nameInput = document.getElementById('name-input').value;
    alert('Hola, ' + nameInput + '! Bienvenido/a al matrimonio de Nicole y Cristian.');
    // Aquí podrías abrir la página del menú
    window.location.href = 'menu.html'; // Redirigir a la página del menú
});

function animateNameInput() {
    var nameInputContainer = document.getElementById('name-input-container');
    nameInputContainer.style.display = 'block'; // Mostrar el contenedor de entrada
    nameInputContainer.classList.add('animate__slideInDown'); // Agregar clase de animación de deslizamiento hacia abajo
}

document.getElementById('submit-btn').addEventListener('click', function() {
    var nameInput = document.getElementById('name-input').value;
    localStorage.setItem('username', nameInput); // Guarda el nombre en el almacenamiento local
});
