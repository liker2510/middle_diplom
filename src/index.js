import smootScroll from "./modules/smootScroll";
import popup from "./modules/popup";
import vaidate from "./modules/validate";
import sendForm from "./modules/sendForm";
import popupPhoto from "./modules/popupPhoto";

smootScroll();
popup();
vaidate();
popupPhoto();
sendForm({
    formId: 'form1'
});
sendForm({
    formId: 'form2'
});