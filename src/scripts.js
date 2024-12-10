let currentSlide = 1;

function go(direction) {
    // Get the current slide number from the URL
    const currentSlide = parseInt(window.location.pathname.match(/slide(\d+)\.html$/)?.[1] || 1);
    const newSlide = currentSlide + direction;

    // Define the total number of slides
    const totalSlides = 7; // Update this number based on the total number of slides

    if (newSlide < 1 || newSlide > totalSlides) {
        alert("No more slides in this direction.");
        return;
    }

    // Navigate to the new slide
    const newSlideFile = newSlide === 1 ? 'index.html' : `slide${newSlide}.html`;
    window.location.href = newSlideFile;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const updateButton = document.getElementById('updateButton');
    const userNameSpan = document.getElementById('userName');

    if (updateButton) {
        updateButton.addEventListener('click', () => {
            const name = nameInput.value.trim() || "friend";
            userNameSpan.textContent = name;
        });
    }
});