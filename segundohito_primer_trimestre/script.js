document.addEventListener('DOMContentLoaded', function() {
    console.log('Page is loaded and ready.');

    // Add a simple animation to the video
    var video = document.querySelector('video');
    video.style.opacity = 0;
    setTimeout(function() {
        video.style.transition = 'opacity 2s';
        video.style.opacity = 1;
    }, 500);
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('CV page is loaded and ready.');
});
header.style.transform = 'translateY(-20px)';
header.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';

window.addEventListener('DOMContentLoaded', () => {
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
});

// Add a slide-in effect to the form
const form = document.querySelector('form');
form.style.opacity = 0;
form.style.transform = 'translateY(20px)';
form.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';

window.addEventListener('DOMContentLoaded', () => {
    form.style.opacity = 1;
    form.style.transform = 'translateY(0)';
