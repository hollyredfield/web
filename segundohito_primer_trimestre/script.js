// Cambia el color del título cuando se hace clic en él
document.getElementById('title').addEventListener('click', function() {
    this.style.color = this.style.color === 'blue' ? 'black' : 'blue';
});

// Reproduce o pausa el video cuando se hace clic en él


// Agrega una animación de desvanecimiento a todos los párrafos en la página


// Agrega una animación de desplazamiento suave a los enlaces de navegación
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
// Cambia el color de fondo del encabezado cuando se desplaza la página
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.style.backgroundColor = window.pageYOffset > 0 ? 'rgba(0, 0, 0, 0.7)' : 'transparent';
});

// Agrega una animación de "zoom in" a la imagen de video cuando se pasa el mouse sobre ella

myVideo.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('batman-title').addEventListener('mouseover', function() {
    document.getElementById('batman-description').style.color = 'yellow';
});
document.getElementById('batman-title').addEventListener('mouseout', function() {
    document.getElementById('batman-description').style.color = 'white';
});

// Cambia el color de los títulos cuando se pasa el mouse sobre ellos
var titles = document.querySelectorAll('.batman-info h1, .batman-info h2');
for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    titles[i].addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
}


for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function() {
        var id = this.id;
        var description = document.getElementById(id + '-description');
        description.style.opacity = 0;
        setTimeout(function() {
            description.style.opacity = 1;
        }, 2000);
    });
}


var batmanInfo = document.querySelector('.batman-info');

// Inicializa la posición de la sección
batmanInfo.style.position = 'relative';
batmanInfo.style.left = '0px';



// Apply professional and readable text effect
var textElements = document.querySelectorAll('.batman-info p');
for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
    textElements[i].style.lineHeight = '1.5';
}

var backgroundVideo = document.querySelector('.background-video');


window.addEventListener('load', function() {
    backgroundVideo.play();
});