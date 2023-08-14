import throttle from "lodash.throttle";

const input = document.querySelector(".input");
const textarea = document.querySelector(".textarea");
const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(checkInput, 500));

form.addEventListener('submit', submit);

let formData = {};

const localData = localStorage.getItem('feedback-form-state')


function checkInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

function submit(evt){
    evt.preventDefault();

    if (input.value === "" || textarea.value === "") {
        alert("Всі поля повинні бути заповнені");}
    
        evt.target.reset();
        localStorage.removeItem('feedback-form-state');
    
}

function reloadPage(){
    if (localData) {
        input.value=JSON.parse(localData).input;
        textarea.value=JSON.parse(localData).textarea;
    } else {
        input.value = "";
        textarea.value = "";
    }
    
}