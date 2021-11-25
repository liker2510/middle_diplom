const smootScroll = () => {
    'use strict';
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = document.querySelector('.smooth-scroll');
    window.addEventListener('scroll', trackScroll);

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
            smoothScroll.classList.add('smooth-scroll-active');
        }
        if (scrolled < coords) {
            smoothScroll.classList.remove('smooth-scroll-active');
        }
      }

    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}

export default smootScroll