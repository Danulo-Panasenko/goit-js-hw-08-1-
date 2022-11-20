import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', saveMessage);
init();

function onFormChange() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const emailMessage = { email, message };
  const emailMessageJSON = JSON.stringify(emailMessage);
  localStorage.setItem(LOCALSTORAGE_KEY, emailMessageJSON);
}
function init() {
  const emailMessageJSON = localStorage.getItem(LOCALSTORAGE_KEY);
  if (emailMessageJSON) {
    const emailMessage = JSON.parse(emailMessageJSON);
    form.elements.message.value = emailMessage.message;
    form.elements.email.value = emailMessage.email;
  }
}
function saveMessage(evt) {
  evt.preventDefault();
  console.log({
    email: evt.currentTarget.elements.email.value,
    message: evt.currentTarget.elements.message.value,
  });
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
