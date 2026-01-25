//* Dark mode toggle script with system preference detection
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const button = document.querySelector('.dark-mode-toggle');
    
    console.log('savedTheme:', savedTheme);
    console.log('prefersDark:', prefersDark);
    
    // Si l'utilisateur a un choix sauvegardé, l'utiliser
    // Sinon, utiliser la préférence système
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        document.body.classList.add('theme--dark');
        button.firstElementChild.classList.add('dark-mode-toggle__icon--moon');
        console.log('Dark mode appliqué');
    } else {
        document.body.classList.remove('theme--dark');
        button.firstElementChild.classList.remove('dark-mode-toggle__icon--moon');
        console.log('Light mode appliqué');
    }

    // Toggle au clic
    button.addEventListener('click', (e) => {
        console.log('Bouton cliqué');
        e.currentTarget.firstElementChild.classList.toggle('dark-mode-toggle__icon--moon');
        
        // Toggler sur body (là où sont les variables CSS)
        const isDarkMode = document.body.classList.toggle('theme--dark');
        console.log('Dark mode actif:', isDarkMode);
        
        // Sauvegarder le choix
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});


//* Typing effect script
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };