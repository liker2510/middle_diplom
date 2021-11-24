import smootScroll from "./modules/smootScroll";
import popup from "./modules/popup";
import vaidate from "./modules/validate";
import sendForm from "./modules/sendForm";

smootScroll();
popup();
vaidate();
sendForm({
    formId: 'form1'
});
sendForm({
    formId: 'form2'
});