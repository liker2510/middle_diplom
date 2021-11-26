const slider = () => {
    const benefits = document.querySelector('#benefits');
    const benefitsItem = document.querySelectorAll('.benefits__item');
    let screenWidth = window.screen.width

    if (screenWidth > 576) {
        benefitsItem.forEach((index) => {
            index.classList.add('dnone');
        })
    }

    // if (benefits !== null) {
    //     console.log(services);
    //     console.log(sliderServiceBlock);
    //     sliderServiceBlock.forEach((index) => {
    //         screenWidth = window.screen.width
    //         if (screenWidth > 576) {
    //             index.classList.add('dnone');
    //         }
  
    //     })
    // }

}

export default slider