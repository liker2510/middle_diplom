import { animate } from "./helpers";

const calc = () => {
    const calcBlock = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcMaterial = document.querySelector('#calc-type-material');
    const calcSquare = document.querySelector('#calc-input');
    const total = document.querySelector('#calc-total');
    console.log(total);

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        console.log(calcTypeValue);
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
        console.log(calcMaterialValue);
        let calcSquareValue = +calcSquare.value;
        console.log(calcSquareValue);
        let totalValue = 0;
      
        if (calcType.value && calcMaterial.value) {
            totalValue = calcTypeValue * calcMaterialValue * calcSquare;
            console.log(totalValue);
        } else {
            totalValue = 0;
        }

        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.textContent =  Math.ceil(progress * totalValue);
            }
          });
           
    }

    calcBlock.addEventListener('input', (e) => {

        if (e.target === calcType || e.target === calcMaterial || e.target === calcSquare) {
            countCalc();
        }
    })
}

export default calc;