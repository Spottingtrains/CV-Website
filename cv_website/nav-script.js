// Navigation active au scroll
const sections = document.querySelectorAll('#apropos, #experience, #formation, #projets');
const navLinks = document.querySelectorAll('.side-menu a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Retire la classe active de tous les liens
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Ajoute la classe active au lien correspondant
            const activeLink = document.querySelector(`.side-menu a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, {
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
});

sections.forEach(section => observer.observe(section));