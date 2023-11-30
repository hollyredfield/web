// Cambia el color del título cuando se hace clic en él
document.getElementById('title').addEventListener('click', function() {
    this.style.color = this.style.color === 'blue' ? 'black' : 'blue';
});

// Reproduce o pausa el video cuando se hace clic en él
var myVideo = document.getElementById('myVideo');
myVideo.addEventListener('click', function() {
    if (this.paused) {
        this.play();
        document.body.style.background = 'black'; // Cambia el fondo del cuerpo a negro cuando el video se está reproduciendo
    } else {
        this.pause();
        document.body.style.background = 'white'; // Cambia el fondo del cuerpo a blanco cuando el video se pausa
    }
});

// Agrega una animación de desvanecimiento a todos los párrafos en la página
var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.transition = 'opacity 2s';
    paragraphs[i].style.opacity = 0;
    (function(i) {
        setTimeout(function() {
            paragraphs[i].style.opacity = 1;
        }, 1000 * i);
    })(i);
}

// Agrega una animación de desplazamiento suave a los enlaces de navegación
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
}

// Cambia el color de fondo del encabezado cuando se desplaza la página
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.style.backgroundColor = window.pageYOffset > 0 ? 'rgba(0, 0, 0, 0.7)' : 'transparent';
});

// Agrega una animación de "zoom in" a la imagen de video cuando se pasa el mouse sobre ella
myVideo.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
myVideo.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});