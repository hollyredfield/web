document.querySelector('.feedback-section form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.style.transition = 'all 2s';
    this.style.transform = 'translateY(-100%)';
});