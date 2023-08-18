import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const {email, message} = form.elements;
let formData = localStorage.getItem('feedback-form-state');
reloadPage();

form.addEventListener('input', throttle(checkInput, 500));
form.addEventListener('submit', submit);

function checkInput(evt){
    const data = {email:email.value, message:message.value}
    localStorage.setItem('feedback-form-state', JSON.stringify(data));

}

function reloadPage(){

    if(formData){
        email.value = JSON.parse(formData).email;
        message.value = JSON.parse(formData).message;
        } else {
            email.value = "";
            message.value = "";
        }
    
}

function submit(evt){
    evt.preventDefault();

    if (email.value === "" || message.value === "") {
        alert("Всі поля повинні бути заповнені");}
    else {const data = {email:email.value, message:message.value}}
    
        evt.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
       
    
}

