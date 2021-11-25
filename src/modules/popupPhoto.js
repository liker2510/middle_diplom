const popupPhoto = () => {
    const imgResponsive = document.querySelectorAll('.sertificate-document');
    const modal = document.getElementById('imgModal');
    const close = document.querySelector(".img_popup_close");
    
    imgResponsive.forEach((index) => {
        index.classList.add('document-inner')
        index.removeAttribute('href')
        index.addEventListener('click', () => {
            modal.style.display = "block";
        })
    })
    
    close.addEventListener('click',() => { 
        modal.style.display = "none";
    })

}

export default popupPhoto