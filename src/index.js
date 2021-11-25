import smootScroll from "./modules/smootScroll";
import popup from "./modules/popup";
import vaidate from "./modules/validate";
import sendForm from "./modules/sendForm";
import popupPhoto from "./modules/popupPhoto";
import timer from "./modules/timer";
import calc from "./modules/calс";

smootScroll();
popup();
vaidate();
popupPhoto();
calc();
timer('03 december 2021');
sendForm({
    formId: 'form1'
});
sendForm({
    formId: 'form2'
});