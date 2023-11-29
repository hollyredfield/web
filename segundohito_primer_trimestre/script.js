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
