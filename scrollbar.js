document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.scroll-dot');
  
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight; // Alterado de clientHeight para offsetHeight
  
            // Atualizado para levar em conta o deslocamento do scroll
            if (pageYOffset >= sectionTop - (sectionHeight / 3) && pageYOffset < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });
  
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.section === current) {
                dot.classList.add('active');
            }
        });
    });
});
