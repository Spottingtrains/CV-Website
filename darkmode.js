// Dark mode toggle — détection préférence système + sauvegarde localStorage

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const button = document.querySelector('.dark-mode-toggle');

    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        document.body.classList.add('theme--dark');
        button.firstElementChild.classList.add('dark-mode-toggle__icon--moon');
    } else {
        document.body.classList.remove('theme--dark');
        button.firstElementChild.classList.remove('dark-mode-toggle__icon--moon');
    }

    button.addEventListener('click', (e) => {
        e.currentTarget.firstElementChild.classList.toggle('dark-mode-toggle__icon--moon');
        const isDarkMode = document.body.classList.toggle('theme--dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
