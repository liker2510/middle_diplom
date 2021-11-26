const slider = () => {
    const benefits = document.querySelector('#benefits');
    const benefitsItem = document.querySelectorAll('.benefits__item');
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

}

export default slider