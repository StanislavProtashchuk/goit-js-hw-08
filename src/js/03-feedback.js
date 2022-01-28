import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_EMAIL = 'email';
const STORAGE_MESSAGE = 'message';

form.addEventListener('submit', onFormSubmit);
input.addEventListener('input', throttle(onInputInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onInputInput(e) {
    const message = e.target.value;

    localStorage.setItem(STORAGE_EMAIL, message);
}

function onTextareaInput(e) {
    const message = e.target.value;

    localStorage.setItem(STORAGE_MESSAGE, message);
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_EMAIL));
    console.log(localStorage.getItem(STORAGE_MESSAGE));
    localStorage.removeItem(STORAGE_EMAIL);
    localStorage.removeItem(STORAGE_MESSAGE);    
};

populateInput();

function populateInput() {
    const savedMessage = localStorage.getItem(STORAGE_EMAIL);
    if (savedMessage) {
        input.value = savedMessage;
    }
}

populateTextarea();

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_MESSAGE);
    if (savedMessage) {
        textarea.value = savedMessage;   
    }
}

