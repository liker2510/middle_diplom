const phone = () => {
    const headerModalOpened = document.querySelector('.header-modal--opened');
    const button = document.querySelector('.button');

    button.addEventListener('click', (e) => {
        e.preventDefault()
        headerModalOpened.classList.remove('header-modal');
    })
    headerModalOpened.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')) {
            console.log("Работает")
            headerModalOpened.classList.add('header-modal');
        }
    })
}

export default phone