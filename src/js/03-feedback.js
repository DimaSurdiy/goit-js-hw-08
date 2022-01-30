import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  checkLocaleStorage(storage);
}

function onFormInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const inputsValueObj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputsValueObj));
}

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  const formSubmitObj = {
    email: email.value,
    message: message.value,
  };

  console.log(formSubmitObj);

  event.currentTarget.reset();
  localStorage.clear();
}

function checkLocaleStorage({ email, message }) {
  inputEl.value = email;
  textareaEl.value = message;
}
