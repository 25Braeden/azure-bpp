let currentSlide = 1;

function go(direction) {
    const totalSlides = document.querySelectorAll('.slide').length;
    const newSlide = currentSlide + direction;

    if (newSlide < 1 || newSlide > totalSlides) {
        alert("No more slides in this direction.");
        return;
    }

    document.getElementById(`slide${currentSlide}`).style.display = 'none';
    document.getElementById(`slide${newSlide}`).style.display = 'block';
    currentSlide = newSlide;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const updateButton = document.getElementById('updateButton');
    const userNameSpan = document.getElementById('userName');

    updateButton.addEventListener('click', () => {
        const name = nameInput.value.trim() || "friend";
        userNameSpan.textContent = name;
    });
});