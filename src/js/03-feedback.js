import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let formData = {};
const STORAGE_DATA = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    formData = {
        email: input.value,
        message: textarea.value,
    }

    localStorage.setItem(STORAGE_DATA, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_DATA)));
    localStorage.removeItem(STORAGE_DATA);  
};

populateData();

function populateData() {
    const data = JSON.parse(localStorage.getItem(STORAGE_DATA));
    if (data) {
        input.value = data.email;
        textarea.value = data.message;
    }
}