document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('noButton');

    button.addEventListener('click', () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });
});

const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', () => {
    window.location.href = 'yes_page.html';
});
