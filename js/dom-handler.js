import { greet } from './greeting.js';

let name = document.querySelector('.inputName');
let btn = document.querySelector('.btn');
let message = document.querySelector('.msg');

const greet_event = btn.addEventListener('click', () => {
    let language = document.querySelector("input[name='radioBtn']:checked");
    if (name && language) {
        message.innerHTML = greet(name.value, language.value);
        name.value = '';
        clear_greet_message()
    } else {
        return
    }
});

const clear_greet_message = () => {
    setTimeout(function () {
        document.querySelector('.msg').innerHTML = ""
    }, 4000);
}

export default greet_event;