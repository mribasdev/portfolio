document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.scroll-dot');
  
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || index + 1;
        }
      });
  
      dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section == current) {
          dot.classList.add('active');
        }
      });
    });
  });
  