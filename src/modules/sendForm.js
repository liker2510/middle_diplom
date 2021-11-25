const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.classList.add('color')
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Мы с вами свяжемся!';


    const changeColor = () => {
        let textColor = document.querySelectorAll('.color');
        if (textColor !== null) {
            
            textColor.forEach((index) => {
                index.style = 'color: #5cb85c; margin-top: 15px;'
            })
        }
    }

    const validate = (list) => {
        let success = true;

        // list.forEach(input => {
        //     if(!input.classList.contains('success')) {
        //         success = false;
        //     }
        // })

        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);
        changeColor();

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block' && element.textContent !== '0') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input' && element.value !== 0) {
                formBody[elem.id] = element.value;
            }
        })
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    changeColor();

                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    changeColor();
                })
        } else {
            alert('Данные не валидны!!!');
        }
    }
    
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            submitForm();
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm;