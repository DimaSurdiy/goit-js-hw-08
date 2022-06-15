import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

setFormElementsValuesFromLocalStorageData(formData);

function setFormElementsValuesFromLocalStorageData(data) {
  if (data) {
    emailEl.value = data.email;
    messageEl.value = data.message;
  }
}

function onFormInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: emailEl.value, message: messageEl.value }),
  );
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
