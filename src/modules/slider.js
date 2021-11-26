const slider = () => {
    const benefits = document.querySelector('#benefits');
    const benefitsItem = document.querySelectorAll('.benefits__item');
    const services = document.querySelector('#services');
    const serviceBlock = document.querySelectorAll('.service-block');
    let screenWidth = window.screen.width

    let currentSlide = 0;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    if (screenWidth <= 576) {
        benefitsItem.forEach((index) => {
            index.classList.add('dnone');
            index.style = 'max-width: 100%;';
            benefitsItem[0].classList.add('service-block-active');
        })

        benefits.addEventListener('click', (e) => {
            prevSlide(benefitsItem, currentSlide, 'service-block-active')
            if (e.target.matches('.benefits__arrow--right>img')) {
                currentSlide++
            } else if (e.target.matches('.benefits__arrow--left>img')) {
                currentSlide--
            }
            if (currentSlide >= benefitsItem.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = benefitsItem.length - 1
            }
            nextSlide(benefitsItem, currentSlide, 'service-block-active');
        })
    } else {
        benefitsItem.forEach((index) => {
            index.classList.add('dnone');
            index.style = 'max-width: 100%;';
            benefitsItem[0].classList.add('service-block-active');
            benefitsItem[1].classList.add('service-block-active');
            benefitsItem[2].classList.add('service-block-active');
        })

        benefits.addEventListener('click', (e) => {
            if (e.target.matches('.benefits__arrow--right>img')) {
                benefitsItem.forEach((index) => {
                    index.classList.toggle('service-block-active');
                })
            } else if (e.target.matches('.benefits__arrow--left>img')) {
                benefitsItem.forEach((index) => {
                    index.classList.toggle('service-block-active');
                })
            }
        })
    }
    if (screenWidth < 1200) {
        serviceBlock.forEach((index) => {
            index.classList.add('dnone');
            serviceBlock[0].classList.add('service-block-active');
        })
        services.addEventListener('click', (e) => {
            prevSlide(serviceBlock, currentSlide, 'service-block-active')
            if (e.target.matches('.services__arrow--right>img')) {
                currentSlide++
            } else if (e.target.matches('.services__arrow--left>img')) {
                currentSlide--
            }
            if (currentSlide >= serviceBlock.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = serviceBlock.length - 1
            }
            nextSlide(serviceBlock, currentSlide, 'service-block-active');
        })
    } else {
        serviceBlock.forEach((index) => {
            index.classList.add('dnone');
            serviceBlock[0].classList.add('service-block-active');
            serviceBlock[1].classList.add('service-block-active');
        })
        services.addEventListener('click', (e) => {
            if (e.target.matches('.services__arrow--right>img')) {
                serviceBlock.forEach((index) => {
                    index.classList.toggle('service-block-active');
                })
            } else if (e.target.matches('.services__arrow--left>img')) {
                serviceBlock.forEach((index) => {
                    index.classList.toggle('service-block-active');
                })
            }
        })
    }

}

export default slider