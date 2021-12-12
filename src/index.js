import smootScroll from "./modules/smootScroll";
import popup from "./modules/popup";
import vaidate from "./modules/validate";
import sendForm from "./modules/sendForm";
import popupPhoto from "./modules/popupPhoto";
import timer from "./modules/timer";
import calc from "./modules/calс";
import slider from "./modules/slider";

smootScroll();
popup();
vaidate();
popupPhoto();
calc();
timer('31 december 2021');
slider();
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'number',
            id: 'calc-total'
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'number',
            id: 'calc-total'
        }
    ]
});