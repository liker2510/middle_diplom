const popup = () => {
    const overlay = document.querySelector('.overlay');
    const headerModalOpened = document.querySelector('.header-modal--opened');
    const servicesModalOpened = document.querySelector('.services-modal--opened');

    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('.button>a')) {
            headerModalOpened.classList.remove('header-modal');
            overlay.style = 'display: block';
        }
        if (e.target.matches('.service-button>a')) {
            servicesModalOpened.classList.remove('services-modal');
            overlay.style = 'display: block';
        }

        if (e.target.classList.contains('services-modal__close')) {
            servicesModalOpened.classList.add('services-modal');
            overlay.style = ' ';
        }
        if (e.target.classList.contains('header-modal__close')) {
            headerModalOpened.classList.add('header-modal');
            overlay.style = ' ';
        }
    })
}

export default popup