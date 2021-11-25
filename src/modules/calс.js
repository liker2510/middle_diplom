import { animate } from "./helpers";

const calc = () => {
    const calcBlock = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcMaterial = document.querySelector('#calc-type-material');
    const calcSquare = document.querySelector('#calc-input');
    const total = document.querySelector('#calc-total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
        let calcSquareValue = +calcSquare.value;
        let totalValue = 0;
        if (calcTypeValue && calcMaterialValue) {
            totalValue = calcTypeValue * calcMaterialValue * calcSquareValue;
        } else {
            totalValue = 0;
        }

        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                // total.placeholder =  Math.ceil(progress * totalValue);
                total.value =  Math.ceil(progress * totalValue);
                
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